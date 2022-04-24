import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';

const Icons = styled.div`
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
    margin: 20px;
    background-color:white;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    line-height: 10px;
    padding: 5px;
    transition: all 0.2s ease;
    cursor: pointer;

`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 220px;
    max-width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    position:  relative;
    
    &:hover {
      -webkit-box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.21); 
      box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.21);

    };
    &:hover  ${Icons}{
      opacity: 1;
      background-color: white;
      top: -10px;
    };
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0
    
`;

const PriceTag = styled.div`
    bottom: 0;
    margin: 5px;
    left: 0;
    position: absolute;
    background-color: white;
    padding: 4px 15px;
    border-radius: 20px;
`;



const Product = ({item}) => {
  let navigate = useNavigate();
  const changeRoute = () => {
    let id = item._id
    let path = `product/${id}`;
    navigate(path);
  }
  // const user = useSelector((state)=>state.user)
  // const addFavourite = () => {
  //   console.log("Product id: ",item.id)
  //   console.log("User id: ",user.currentUser.userdetails.id)
  //   let addFavourite = {"user_id":user.currentUser.userdetails.id,"product_id":item.id }
  //   console.log(addFavourite)
  //   axios.post('http://localhost:3001/api/fav/addFavs/',addFavourite)
  //   .then(response=>{console.log(response.data)}).catch(error=>console.error(error))
  // }
  return (
    <Container>
        <Image onClick={changeRoute} src={item.img}/>
        <PriceTag>${item.price}</PriceTag>
        <Icons>
          <FavoriteBorderIcon/>
        </Icons>
    </Container>
  )
}

export default Product