import React from "react";
import ThemeProvider from "react-bootstrap/esm/ThemeProvider";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./modules/homePage/components/HomePage";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <AppLayout>
        <HomePage/>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
