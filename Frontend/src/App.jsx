import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Search from "./pages/SearchResults"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user? <Home/>: <Navigate to="/login"/>}/>
        <Route path = "/login" element={user? <Navigate to="/"/> : <Login/>}></Route>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "product/:id" element={<Product/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/orders" element={<Orders/>}/>
        <Route path = "/search" element={<Search/>}/>
      </Routes>
    </Router>
  )
}

export default App;