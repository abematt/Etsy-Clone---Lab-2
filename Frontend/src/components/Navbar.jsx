import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Badge from '@mui/material/Badge'; 
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import HouseIcon from '@mui/icons-material/House';

const Container = styled.div`
    height: 60px;
`
const Logo = styled.a`
    cursor: pointer;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`

const SearchContainer = styled.div`
    border: 2px solid black;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
`
const Input = styled.input`
    border:none;
    width:100%;
`

const Center = styled.div`
    flex: 2;
    
`

const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`
const Icon = styled.a`
    cursor: pointer;
`

const Navbar = () => {
  let navigate = useNavigate();
  const quantity = useSelector(state=>state.cart.quantity)
  
  return (
    <Container> 
        <Wrapper>
           <Left>
               <Logo onClick={()=>{navigate("/")}}>
              <h1>ETSY</h1>
              </Logo>
           </Left> 
           <Center>              
              <SearchContainer>
                  <Input/>
                  <SearchIcon/>
              </SearchContainer>
            </Center>
           <Right>
                <Icon href="/profile">
                <FavoriteIcon></FavoriteIcon>
                </Icon>
                <Icon >
                <PersonIcon onClick={()=>{navigate("/profile")}}/>
                </Icon>
                <Icon>
                    <AddBusinessIcon onClick={()=>{navigate("/create-shop")}}/>
                </Icon>
                
                <Icon>
                    <HouseIcon onClick={()=>{navigate("/shop-home")}}/>
                </Icon>
                <Icon>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartIcon onClick={()=>{navigate("/cart")}}/>
                </Badge>
                </Icon>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar