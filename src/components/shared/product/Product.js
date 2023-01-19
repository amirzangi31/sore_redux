import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//FUNTIONS
import { isInCart, productCount, shorthen } from "../../../helper/functions";

//ACTIONS
import {
  addToCart,
  decrease,
  increase,
  removeItem,
} from "../../../redux/cart/cartAction";

//ICONS
import { BsFillTrashFill } from "react-icons/bs";

//STYLED-COMPONENET
import {
  Btn,
  BtnsContainer,
  Card,
  CardBody,
  CardTitle,
  ImageCard,
  Number,
  Title,
} from "./productStyled";

function Product(props) {
  const cartData = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <Card>
      <ImageCard src={props.image} alt="product" style={{ width: "100%" }} />
      <CardBody>
        <CardTitle>{shorthen(props.title)}</CardTitle>
        <Title>
          <span>Price : </span> {props.price} $
        </Title>
        <Title>
          Category : <strong>{props.category}</strong>
        </Title>
        <BtnsContainer>
          <Btn color="rgba(0,0,0,0.5)">
            <Link to={`/products/${props.id}`}>Deatils</Link>
          </Btn>

          <BtnsContainer>
            {isInCart(cartData, props.id) ? (
              <Btn
                type="button"
                color="blue"
                onClick={() => dispatch(increase(props.id))}
              >
                +
              </Btn>
            ) : (
              <Btn
                color="blue"
                type="button"
                onClick={() => dispatch(addToCart(props))}
              >
                ADD TO CART
              </Btn>
            )}
            {productCount(cartData, props.id) && (
              <Number>{productCount(cartData, props.id)}</Number>
            )}
            {productCount(cartData, props.id) === 1 && (
              <Btn
                type="button"
                onClick={() => dispatch(removeItem(props.id))}
                color="red"
              >
                <BsFillTrashFill />
              </Btn>
            )}
            {productCount(cartData, props.id) > 1 && (
              <Btn
                type="button"
                onClick={() => dispatch(decrease(props.id))}
                color="red"
              >
                -
              </Btn>
            )}
          </BtnsContainer>
        </BtnsContainer>
      </CardBody>
    </Card>
  );
}

export default Product;
