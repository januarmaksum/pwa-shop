import { StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./components/layout";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f0f0f0", // Change this to your desired color
        },
      },
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