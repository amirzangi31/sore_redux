import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #dfe6e9;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px 0 0 0;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.1);
`;

const ImageCard = styled.img`
  width: 100%;
  height : 180px;
  object-fit: contain;
`;

const Title = styled.p`
    color: ${props => props.theme.colors.primary};

`

const CardTitle = styled.h3`
        text-align: center;
`

const CardBody = styled.div`
        padding : 10px;
`

const BtnsContainer = styled.div`
    display: flex;
    justify-content : space-between;
    align-items: center;
    margin: 5px 0 ;

`


const Btn = styled.button`
    background: ${props => props.color};
    padding : 5px 10px;
    border-radius :5px;
    color: ${props => props.theme.colors.secondary};
`


const Number = styled.span`
    background: rgba(0,0,0,0.5);
    color: ${props => props.theme.colors.secondary};
    margin : 0 10px;
    padding : 5px 10px ;
    border-radius : 5px;
`


export { Card, ImageCard ,CardTitle,CardBody,Title , BtnsContainer,Btn,Number};
