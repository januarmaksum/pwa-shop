import axios from "axios";
import { ICategory } from "../interfaces/category.interfaces";
import CategoryTypeData from "../data/category.type.json";

const CATEGORY_API_URL = "https://fakestoreapi.com/products/categories";

export const fetchCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await axios.get<string[]>(CATEGORY_API_URL);
    const categories = response.data.map((category, index) => ({
      name: category,
      image: CategoryTypeData[index]?.image || "",
    }));
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
