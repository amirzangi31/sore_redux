import React from "react";

//REDUX
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { ImCart } from "react-icons/im";

//SYLED COMPONENT
import {
  ContainerNavbar,
  Title,
  Nav,
  CartContainer,
  CartLogo,
  Number
} from "./navbarStyled";

function Navbar() {
  const cartData = useSelector((state) => state.cartState);

  return (
    <Nav>
      <ContainerNavbar>
        <CartContainer>
          <Link to="/cart">
            <CartLogo>
              <ImCart />
            </CartLogo>
          </Link>
          <Number>{cartData.itemsCounter}</Number>
        </CartContainer>
        <Title><Link to="/">Shopping</Link></Title>
      </ContainerNavbar>
    </Nav>
  );
}

export default Navbar;
