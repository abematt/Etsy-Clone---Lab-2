import styled from 'styled-components'
import Product  from './Product'
import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import { userRequest } from "../requestMethods";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addAllProducts } from '../redux/productRedux'
import { addAllShops } from '../redux/shopRedux'

const Container = styled.div`
    padding: 0px 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    min-height:100vh;
`

const Products = (props) => {
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(`http://localhost:3001/api/product/all`);
        // const shop_res = await axios.get('http://localhost:3001/api/shop/getAllShops'); 
        const shop_res = await userRequest.get("shop/getAllShops/")
        console.log(res.data.message)
        setProducts(res.data.message)
        dispatch(addAllShops(shop_res.data.message))
        dispatch(addAllProducts(res.data.message))
      }catch(err){
        console.log(err)
      }
    }
    getProducts();
  },[])
  return (
    <Container>
        {products.length? products.map(item => (
            <Product item={item} key={item._id}/>
        )): ""}
    </Container>
  )
}

export default Products;