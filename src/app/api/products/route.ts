import { dbConnect } from "@/app/libs/db";
import Product from "@/models/Product";

export async function GET(req: Request) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status");
  const stock = searchParams.get("stock");

  const skip = (page - 1) * limit;

  const query = {
    ...(search && { name: { $regex: search, $options: "i" } }),
    ...(status === "published" && { status: "published" }),
    ...(stock === "in_stock" && { stock: { $gt: 0 } }),
    ...(stock === "out_of_stock" && { stock: { $lte: 0 } }),
  };

  const [products, total] = await Promise.all([
    Product.find(query).skip(skip).limit(limit),
    Product.countDocuments(query),
  ]);

  return Response.json({ products, total });
}
