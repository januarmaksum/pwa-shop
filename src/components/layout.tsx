import * as React from "react";
import axios from "axios";
import ProductList from "./product/ProductList";
import { IProduct } from "../interfaces/product.interfaces";
import { Container, Paper, Typography } from "@mui/material";

export default function Layout() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    // Fetch products from the API
    axios
      .get<IProduct[]>("https://fakestoreapi.com/products?limit=18")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Paper className="text-center shadow-lg shadow-indigo-600/10 p-3 text-indigo-600 border border-indigo-600 border-solid mt-5">
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
