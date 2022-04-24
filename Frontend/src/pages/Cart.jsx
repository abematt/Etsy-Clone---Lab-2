import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
`
const TopTexts = styled.div`
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
const ProductBox = styled.div`
  width: 80%;
`

const Product = styled.div`
  display:flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;

`
const Image = styled.img`
  width: 200px;
  height:200px;
  object-fit: cover;
  object-position: 50% 0
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.div`
`
const ProductDetails = styled.div`
`
const PriceDetail = styled.div`
  flex: 1;
`
const Bill = styled.div`
display: flex;
justify-content: space-between;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50%;
`;

const SummaryTitle = styled.div`
font-size: 20px;
font-weight: 500;
`;

const SummaryItemText = styled.div`
  
`;

const SummaryItemPrice = styled.div`
font-size: 20px;
font-weight: 500;
`;

const giftingOption = styled.input`
`;

const giftOptionTitle = styled.p`
`

const Cart = () => {
  const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
            </Top>
            <Bottom>
            <ProductBox>
            {cart.products.map(product=>(<Product>
                <ProductDetail>
                <Image src={product.img}/>
                <Details>
                  <ProductName><b>Product:</b>{product.name}</ProductName>
                  <Add/>
                  <ProductDetails><b>Quantity: </b>{product.quantity}</ProductDetails>
                  <Remove/>
                  <Product>
                  <p>Gifting Packaing:</p>
                  <input type="checkbox"></input>
                  </Product>
                </Details>
              </ProductDetail>
              <PriceDetail>
                ${product.price}
              </PriceDetail>  
              
              </Product>))}
              </ProductBox>
              <Summary>
                <Bill>
                  <SummaryTitle>Total Amount</SummaryTitle>
                  <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                </Bill>
                <TopButton>Checkout Now</TopButton>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart;