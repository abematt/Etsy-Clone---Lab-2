import React, { useEffect,useState } from 'react'
import {useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Product  from '../components/Product'
import Footer from '../components/Footer'
import axios from 'axios'
import styled from 'styled-components'
import { publicRequest } from '../requestMethods';

const Container = styled.div`
    padding: 0px 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    min-height:100vh;
`

const Search = (props) => {
  const [product , setProduct] = useState([])
  const location = useLocation();
  
  useEffect(()=>{
      setProduct([])
      const getProduct = async ()=>{
          try{
              console.log("search key is",location.state)
            //   const res = await publicRequest.post("product/findByName",location.state)
              const res = await axios({
                  method: 'post',
                  url: 'http://localhost:3001/api/product/findByName',
                  data: {"name": location.state}
              })
              console.log(res.data.message)
              setProduct(res.data.message)
          }catch(err){
              console.log(err)
          }
      }
      getProduct();
  },[]);
  console.log("We have",product)
  return (
    <div>
      <Navbar/>
      <Container>
          {product.length? product.map(item=>(
              <Product item={item} key={item._id}/>
           )):""} 
      </Container>
      <Footer/>
      </div>
  )
}

export default Search