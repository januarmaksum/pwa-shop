import * as React from "react";
import axios from "axios";
import ProductList from "./product/ProductList";
import { IProduct } from "../interfaces/product.interfaces";
import { ICategory } from "../interfaces/category.interfaces";
import { Container, Paper, Typography } from "@mui/material";
import CategoryCardList from "./category/CategoryCardList";
import CategoryTypeData from "../data/category.type.json";

export default function Layout() {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [categories, setCategories] = React.useState<ICategory[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products?limit=18"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get<string[]>(
          "https://fakestoreapi.com/products/categories"
        );
        const categoryData = response.data.map((category, index) => ({
          name: category,
          image: CategoryTypeData[index]?.image || "",
        }));
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching the categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <Container maxWidth="lg">
      <CategoryCardList categories={categories} />
      <Paper className="text-center shadow-lg shadow-indigo-600/20 p-1 lg:p-3 border-b-2 border-solid border-l-0 border-r-0 border-t-0 text-indigo-600 mt-5">
        <Typography component="h2" className="capitalize font-bold">
          Recommended for you
        </Typography>
      </Paper>
      <section className="py-6">
        <ProductList products={products} />
      </section>
    </Container>
  );
}
