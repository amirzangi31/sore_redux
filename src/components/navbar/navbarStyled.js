import styled from "styled-components";
import { Container } from "../../styles/Global";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
`;

const ContainerNavbar = styled(Container)`
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  ${Container}
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  
`;

const CartContainer = styled.div`
  font-size: 1.2rem;
  position: relative;
`;

const CartLogo = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
`;
const Number = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  width: 20px;
  height: 20px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
  background: ${(props) => props.theme.colors.tertiary};
`;

export { ContainerNavbar, Title, Nav, CartContainer, CartLogo, Number };
