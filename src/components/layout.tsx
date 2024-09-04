import * as React from "react";
import ProductList from "./product/ProductList";
import { Container, Paper, Typography } from "@mui/material";
import CategoryCardList from "./category/CategoryCardList";
import { fetchProducts, fetchCategories } from "../services/api";
import useStore from "../store/product.store";

export default function Layout() {
  const {
    products,
    categories,
    isLoadingProducts,
    isLoadingCategories,
    setProducts,
    setCategories,
    setLoadingProducts,
    setLoadingCategories,
  } = useStore();

  React.useEffect(() => {
    const loadProducts = async () => {
      setLoadingProducts(true);
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    loadProducts();
  }, [setProducts, setLoadingProducts]);

  React.useEffect(() => {
    const loadCategories = async () => {
      setLoadingCategories(true);
      try {
        const categories = await fetchCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    loadCategories();
  }, [setCategories, setLoadingCategories]);

  return (
    <Container maxWidth="lg" className="px-2 md:px-4">
      <CategoryCardList
        categories={categories}
        isLoading={isLoadingCategories}
      />
      <Paper className="text-center shadow-lg shadow-indigo-600/20 p-1 lg:p-3 border-b-2 border-solid border-l-0 border-r-0 border-t-0 text-indigo-600 mt-5">
        <Typography component="h2" className="capitalize font-bold">
          Recommended for you
        </Typography>
      </Paper>
      <section className="pt-2 md:pt-4 mb-4">
        <ProductList products={products} isLoading={isLoadingProducts} />
      </section>
    </Container>
  );
}
