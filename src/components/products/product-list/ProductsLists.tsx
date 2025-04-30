"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Lists from "./Lists";
import ListActions from "./ListActions";
import { deleteProduct } from "@/helper/productList";
import { ProductListProps } from "../../dashboard/types";
import PaginationButton from "./PaginationButton";
import Loader from "./Loader";

export default function ProductsLists() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Pagination state
  const currentPage = Number(searchParams?.get("page")) || 1;
  const itemsPerPage = 10;

  const [allProducts, setAllProducts] = useState<ProductListProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductListProps[]>(
    []
  );
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteProductsLoading, setDeleteProductsLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "published">(
    (searchParams?.get("status") as "all" | "published") || "all"
  );
  const [stockFilter, setStockFilter] = useState<
    "all" | "in_stock" | "out_of_stock"
  >(
    (searchParams?.get("stock") as "all" | "in_stock" | "out_of_stock") || "all"
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams?.get("search") || ""
  );
  console.log("🚀 ~ ProductsLists ~ setSearchQuery:", setSearchQuery);

  // Update URL without page reload
  const updateURL = (params: {
    page?: number;
    query?: string;
    filter?: "all" | "published";
    stockFilter?: "all" | "in_stock" | "out_of_stock";
  }) => {
    const newParams = new URLSearchParams(searchParams?.toString() || "");

    if (params.page !== undefined)
      newParams.set("page", params.page.toString());
    if (params.query !== undefined) newParams.set("search", params.query);
    if (params.filter !== undefined) newParams.set("status", params.filter);
    if (params.stockFilter !== undefined)
      newParams.set("stock", params.stockFilter);

    router.push(`${pathname}?${newParams.toString()}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=${currentPage}&limit=${itemsPerPage}&search=${searchQuery}&status=${filter}&stock=${stockFilter}`
        );
        setAllProducts(data.products);
        setTotalProducts(data.total);
        applyFilters(data.products, searchQuery, filter, stockFilter);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, searchQuery, filter, stockFilter]);

  const applyFilters = (
    products: ProductListProps[],
    query: string,
    statusFilter: "all" | "published",
    stockStatus: "all" | "in_stock" | "out_of_stock"
  ) => {
    let result = [...products];

    if (query) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (statusFilter === "published") {
      result = result.filter((product) => product.status === "published");
    }

    if (stockStatus === "in_stock") {
      result = result.filter((product) => product.stock > 0);
    } else if (stockStatus === "out_of_stock") {
      result = result.filter((product) => product.stock <= 0);
    }

    setFilteredProducts(result);
  };

  const handleFilterChange = (newFilter: "all" | "published") => {
    setFilter(newFilter);
    updateURL({ filter: newFilter, page: 1 });
  };

  const handleStockFilterChange = (
    newFilter: "all" | "in_stock" | "out_of_stock"
  ) => {
    setStockFilter(newFilter);
    updateURL({ stockFilter: newFilter, page: 1 });
  };

  const handlePageChange = (newPage: number) => {
    updateURL({ page: newPage });
  };

  const handleDelete = async (productId: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!isConfirmed) return;

    setDeleteProductsLoading(true);
    try {
      const result = await deleteProduct(productId);
      toast.success(result.message || "Product deleted successfully!");
      // Re-fetch data to maintain pagination state
      const { data } = await axios.get(
        `/api/admin/products?page=${currentPage}&limit=${itemsPerPage}`
      );
      setAllProducts(data.products);
      setTotalProducts(data.total);
      applyFilters(data.products, searchQuery, filter, stockFilter);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product.");
    } finally {
      setDeleteProductsLoading(false);
    }
  };

  return (
    <div className='w-full mx-auto mt-5 p-5 bg-lighter dark:bg-dark rounded-lg shadow'>
      <ListActions
        filter={filter}
        setFilter={handleFilterChange}
        stockFilter={stockFilter}
        setStockFilter={handleStockFilterChange}
        productsCount={totalProducts.toString()}
        publishedCount={allProducts
          .filter((p) => p.status === "published")
          .length.toString()}
      />

      {loading ? (
        <Loader />
      ) : error ? (
        <p className='text-red-500 text-center'>{error}</p>
      ) : filteredProducts.length > 0 ? (
        <>
          <div className='overflow-x-auto'>
            <Lists
              deleteProductsLoading={deleteProductsLoading}
              filteredProducts={filteredProducts}
              handleDelete={handleDelete}
            />
          </div>
          <PaginationButton
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalProducts={totalProducts}
          />
        </>
      ) : (
        <p className='text-center text-gray-500 py-10'>محصولی دریافت نشد</p>
      )}
    </div>
  );
}
