import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { userRequest } from "../requestMethods";

import { useDispatch } from "react-redux";
import {removeAllProducts,addProductQuantity,removeProductQuantity,deleteProduct} from "../redux/cartRedux"


const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
    height:85vh;
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
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();

  console.log(cart)

const clearCart = (e) => {
  dispatch(removeAllProducts());
}

const handleCheckOut = (e) => {
  e.preventDefault();
  const postOrder = async () => {
    var productList = []
    Array.from(cart.products).forEach(element =>{ 
      console.log("element",element) 
      productList.push({"product_id":element._id,"quantity":element.quantity,"shop_id":element.shop_id})
    })
    console.log("productlist",productList)
    const orderPayload  = {
      "user_id" : user.currentUser._id,
      "products" : productList,
      "amount": cart.total
    }
    try {
      const product = await userRequest.post("order/create",orderPayload)
      dispatch(removeAllProducts());
    }catch {
    }
  }
  postOrder();
} 
const handleQuantity = (type,item,index) => {
  if(type==="inc"){
    dispatch(addProductQuantity(item))
  }
  else {
    dispatch(removeProductQuantity(item))
    if(item.quantity === 1)
    {
      console.log(item.quantity)
      dispatch(deleteProduct(item))
    }
  }
}
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
            </Top>
            <Bottom>
            <ProductBox>
            {cart.products.map((product,index)=>(<Product>
                <ProductDetail>
                <Image src={product.img}/>
                <Details>
                  <ProductName><b>Product:</b>{product.name}</ProductName>
                  <Add onClick={()=>handleQuantity("inc",product,index)}/>
                  <ProductDetails><b>Quantity: </b>{product.quantity}</ProductDetails>
                  <Remove onClick={()=>handleQuantity("dec",product,index)}/>
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
                <TopButton onClick={handleCheckOut}>Checkout Now</TopButton>
                <TopButton onClick={clearCart}>Clear Cart</TopButton>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart;