import React, { useContext, useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AuthContext } from '../App'
import './Home.css';
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";

function Addtocart() {

  const {user} = useContext(AuthContext)
  const [auth,setAuth]  = useState(false)
  const remove = (id)=>{
    
    let filteredData = user.cart.filter((item)=>item.id != id)
    user.cart = filteredData
    setAuth(!auth)
  }
  const Increment = (id)=>{
    const cartData = user.cart.find((item)=>item.id===id)
    cartData.quantity += 1
    setAuth(!auth)
  }
  const Decrement = (id)=>{
    const cartData = user.cart.find((item)=>item.id===id)

    if(cartData.quantity>1){
      cartData.quantity -= 1
    }
    
    setAuth(!auth)
  }

  return (
    <div >
      
    <br /><br /><br /><br />
    { user&&user.cart.map((item)=>(
     
     <div className='container mainDivIncart' style={{width:'100%',height:'30vh',background:'white',color:'black',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1rem',overflow:'hidden',borderRadius:'5px',boxShadow:'10px 10px 10px rgb(0, 0, 0,0.6)'}}>
      <div className="container" style={{display:'flex',justifyContent:'flex-start',columnGap:'0.5rem',padding:'1rem',alignItems:'center'}}>
        <div style={{width:'30%',display:'flex'}}>
        
          <img src={item.image} style={{width:'inherit',objectFit:'fill',border:'1px solid grey'}} />
        </div>
        <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <strong><p>₹{item.price*item.quantity}</p></strong>
          <p>Quantity : <FaPlusSquare onClick={()=>Increment(item.id)} style={{color:'#47272b'}} /> {item.quantity} <FaSquareMinus onClick={()=>Decrement(item.id)} style={{color:'#47272b'}} /></p>
        </div>
        <div style={{marginLeft:'20px'}}>
          <RiDeleteBin6Fill onClick={()=>remove(item.id)} style={{color:'#47272b'}} />
        </div>
      </div>
    </div>
  ))
}
<br />
  <div className='container'>
      <h5 style={{display:'flex',justifyContent:'right',color:'#47272b'}}>Total : ₹{user.cart.reduce((acc,curr)=>acc += curr.price*curr.quantity,0)}</h5>
  </div>
      </div>
  )
}

export default Addtocart