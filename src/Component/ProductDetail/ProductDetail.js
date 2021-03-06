import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://pacific-wildwood-12473.herokuapp.com/product/" + productKey)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productKey]);

  return (
    <div>
      <h1>{productKey} Detail: </h1>
      <Product showAddToCart={false} product={product}>
        {" "}
      </Product>
    </div>
  );
};

export default ProductDetail;
