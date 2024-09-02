import * as React from "react";
import axios from "axios";
import ProductList from "./product/ProductList";
import { IProduct } from "../interfaces/product.interfaces";
import { Container } from "@mui/material";

export default function Layout() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    // Fetch products from the API
    axios
      .get<IProduct[]>("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <section className="py-6">
        <ProductList products={products} />
      </section>
    </Container>
  );
}
