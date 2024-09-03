import { StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./components/layout";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
});

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
