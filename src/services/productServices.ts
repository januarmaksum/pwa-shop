import axios from "axios";
import { IProduct } from "../interfaces/product.interfaces";

const PRODUCT_API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async (limit: number = 18): Promise<IProduct[]> => {
  try {
    const response = await axios.get<IProduct[]>(`${PRODUCT_API_URL}?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
