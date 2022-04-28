import { useSelector } from "react-redux";
import React, { useState,useEffect } from 'react'

import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { userRequest } from "../requestMethods";

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
   
`;

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

const Orders = () => {
    const [orders,setOrders] = useState({})
    const [isFetching,setIsFetching] = useState(true)
    const user = useSelector(state=>state.user)
    const allProducts = useSelector(state=>state.product)
    const allShops = useSelector(state=>state.shop)
    const user_id = user.currentUser._id

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(1);

    useEffect(()=>{
        setCurrentPage(1);
    },[postsPerPage])

    useEffect(()=>{
        const getOrders = async () => {
            try{
                const res = await userRequest.get("order/getOrders/" + user_id)
                
                setOrders(res.data)
                setIsFetching(false)
                
            }catch(err){
                console.log(err)
            }
        }
        getOrders();
    },[user_id])

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const indexOFLastOrder = currentPage * postsPerPage;
    const indexOfFirstOrder = indexOFLastOrder - postsPerPage
    console.log(orders)
    const currentOrder = Object.entries(orders).slice(indexOfFirstOrder, indexOFLastOrder)
    console.log(currentOrder)
    
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <select value ={postsPerPage} onChange={(e) => setPostsPerPage(parseInt(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
                {isFetching ? "" :currentOrder.map((order,index)=>(
                    <div>
                        <h1>Order No: {index+1}</h1>
                        <div>
                            {order[1].products.map((product)=>(
                                <ProductDetail>
                                <Image src={allProducts.products.find(x=>x._id===product.product_id).img}/>
                                <Details>
                                <h1>Product Name: {allProducts.products.find(x=>x._id===product.product_id).name}</h1>
                                <h2>{allShops.shops.find(x=>x._id===product.shop_id).name}</h2>
                                
                                <p>Order Id: {product._id}</p>
                                {/* <ProductDetails><b>Quantity: </b>{product.quantity}</ProductDetails> */}
                                <Product>
                                <p>Gift: {product.gift_packing ? "Yes": "No"}</p>
                                <p>Quantity: {product.quantity}</p>
                                </Product>
                                </Details>
                                </ProductDetail>
                            ))}
                        </div>
                    </div>
                ))}  
        

            </Wrapper>
            <Footer/>
        </Container>

    )
}

export default Orders