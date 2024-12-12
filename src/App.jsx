import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Sign from "./pages/sign";
import { Routes , Route, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooTer from "./components/FooTer"
import View from "./components/View";
import { createContext, useEffect, useState } from "react";
import {CardProduct}from "./components/CardProduct";
import Addtocart from "./pages/Addtocart";
import Paymentsec from "./pages/Paymentsec"
import Admin from "./pages/Admin";

export const AuthContext = createContext()
function App() {
  const [products,setProducts]  =useState(CardProduct)
  const [login,SetLogin] = useState([])
  const [user,setUser] = useState(null)
  const [search,setSearch] = useState(null)
  const location = useLocation() 

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);
  
  return (
    <div className="app">
  <AuthContext.Provider value={{products,setProducts,login,SetLogin,user,setUser,search,setSearch}}>
  <Navbar />
  <div style={{minHeight:'100vh'}}>
      <Routes>

        <Route path={"/"} element={<Home />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/shop/:type"} element={<Shop />} />
        <Route path={"/shop/:type/:id"} element={<View />} />
        <Route path={"/About"} element={<About/>} />
        <Route path={"/Contact"} element={<Contact/>} />
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Signup"} element={<Sign />} />
        <Route path={"/addcart"} element={<Addtocart />} />
        <Route path={"/payment/:id"} element={<Paymentsec />} />
        <Route path={"/admin"} element={<Admin />} />
        {/* <Route path={"/Navbar"}element={<Navbar/>}/> */}

      </Routes>
</div>
      <FooTer />
</AuthContext.Provider>
    </div>
  );
}

export default App;