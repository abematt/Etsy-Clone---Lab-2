import styled from 'styled-components'
import Product  from './Product'
import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
    padding: 0px 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    min-height:100vh;
`

const Products = (props) => {
  const location = useLocation();
  console.log(location);

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(`http://localhost:3001/api/product/all`);
        console.log(res.data.message)
        setProducts(res.data.message)
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