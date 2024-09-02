// import * as React from 'react';
import { StyledEngineProvider } from "@mui/material/styles";
import Layout from "./components/layout";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Layout />
    </StyledEngineProvider>
  );
}
