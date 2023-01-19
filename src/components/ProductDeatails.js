import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Image from "../images/phone.jpg";


function ProductDeatails() {
  const id = useParams();

  const productData = useSelector((state) => state.productsState);
  const product = productData.products.products[id.id - 1];
const {title , price , description , category} = product
  return (
    <div>
      <img src={Image} alt="product" />
      <div>
        <h2>{title}</h2>
        <p>{price} $</p>
        <div>
          <p>{description}</p>
          <p>
            <span>category :</span> {category}
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default ProductDeatails;
