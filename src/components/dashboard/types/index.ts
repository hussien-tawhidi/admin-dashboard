export interface ProductListProps {
  _id: string;
  name: string;
  price: number | 0;
  subcategories?: string;
  images?: ProductImage[];
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  stock: number;
  status?: "published" | "draft";
  category?: {
    _id: string;
    name: string;
  };
}

export interface ProductImage {
  url: string;
  public_id?: string;
}

export interface ListsProps {
  filteredProducts: ProductListProps[];
  deleteProductsLoading: boolean;
  handleDelete: (id: string) => void;
}
