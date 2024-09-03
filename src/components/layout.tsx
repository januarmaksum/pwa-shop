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

    loadProducts();
    loadCategories();
  }, [setProducts, setCategories, setLoadingProducts, setLoadingCategories]);

  return (
    <Container maxWidth="lg">
      <CategoryCardList categories={categories} loading={isLoadingCategories} />
      <Paper className="text-center shadow-lg shadow-indigo-600/20 p-1 lg:p-3 border-b-2 border-solid border-l-0 border-r-0 border-t-0 text-indigo-600 mt-5">
        <Typography component="h2" className="capitalize font-bold">
          Recommended for you
        </Typography>
      </Paper>
      <section className="py-6">
        {isLoadingProducts ? (
          <>loading products...</>
        ) : (
          <ProductList products={products} />
        )}
      </section>
    </Container>
  );
}
