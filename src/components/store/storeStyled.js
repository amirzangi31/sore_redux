import styled from "styled-components";
import { Container } from "../../styles/Global";

const StoreContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  ${Container};
  margin-top: 50px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
  
`;

export { StoreContainer };
