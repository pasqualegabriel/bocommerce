import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import products from "../src/db/dbProducts.json";
import { STORAGE_PRODUCTS_CART } from "./utils/constants";

function App() {
  // const products = useState(productosBD, null);
  const [productsCart, setProductsCart] = useState([]);
  const [p2, setP2] = useState({ result: products, loading: false });

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart([]);
    }
  };

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente.`);
  };

  return (
    <div>
      <TopMenu
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        products={p2}
      />
      <Products products={p2} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
