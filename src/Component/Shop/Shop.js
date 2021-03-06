import React, { useEffect, useState } from "react";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Spinner } from "react-bootstrap";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState(" ");

  // shuffle products
  // const shuffle = (a) => {
  //   for (let i = a.length; i; i--) {
  //     let j = Math.floor(Math.random() * i);
  //     [a[i - 1], a[j]] = [a[j], a[i - 1]];
  //   }
  // };
  // shuffle(products);

  useEffect(() => {
    fetch(
      "https://pacific-wildwood-12473.herokuapp.com/products?search=" + search
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    fetch("https://pacific-wildwood-12473.herokuapp.com/productsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => {
        const cartProducts = productKeys.map((key) => {
          const product = data.find((product) => product.key === key);
          product.quantity = savedCart[key];
          return product;
        });
        // console.log("cartProducts", cartProducts);
        setCart(cartProducts);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    console.log(newCart);
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="twin-container">
      <div className="product-container">
        <div className="container  w-100 pt-5">
          <input
            className="form-control w-50"
            type="text"
            onKeyUp={handleSearch}
            placeholder="Search Products"
          />
        </div>

        {products.length === 0 && (
          <Spinner
            className="container d-flex justify-content-center"
            animation="border"
          />
        )}

        {products.map((pd) => (
          <Product
            key={pd.key}
            product={pd}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <Button variant="primary"> Review Order</Button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
