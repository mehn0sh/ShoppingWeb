import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/CartContext.jsx";
import ProductProvider from "./context/ProductContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
  <SidebarProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
  </SidebarProvider>
    </CartProvider>
);
