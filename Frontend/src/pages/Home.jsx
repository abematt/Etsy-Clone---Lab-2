import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import axios from 'axios'
// import { addStoreProducts } from "../redux/productRedux"
// import { useDispatch } from "react-redux";

const Home = () => {
  const [products , setProducts] = useState([])
//   const dispatch = useDispatch();

//   useEffect(()=> {
//     axios.get('http://localhost:3001/api/products').then(response => {
//       setProducts(response.data)
//     //   dispatch(addStoreProducts(response.data))
//     }).catch(error => console.log(error))
//   }, [])
  return (
    <div>
      <Navbar/>
      <Products/>
      {/* <Products products={products}/> */}
      <Footer/>
      </div>
  )
}

export default Home