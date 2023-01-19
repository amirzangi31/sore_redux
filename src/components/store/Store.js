import React, { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../redux/products/productsAction";

//COMPONENTS
import Product from "../shared/product/Product";


//STYLED-COMPONENTS
import { StoreContainer } from "./storeStyled";

function Store() {
  const productsData = useSelector((state) => state.productsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  const { loading, error, products } = productsData;
console.log(products);
  if (loading) return <StoreContainer><h1>loading ...</h1></StoreContainer>;
  if (error) return <StoreContainer><h1>{error}</h1></StoreContainer>;



  return (
    <StoreContainer >
      {products &&
        products.map((item) => <Product key={item.id} {...item} /> )}
    </StoreContainer>
  );
}

export default Store;
