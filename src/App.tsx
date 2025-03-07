import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import AppRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <main className="container">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
