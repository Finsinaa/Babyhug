import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { useNavigate, useParams } from 'react-router-dom';
  import React, { useContext, useEffect, useState } from 'react';
  import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
  import { AuthContext } from '../App';
  import './Shop.css';
  // import { BiSolidOffer } from "react-icons/bi";
  
  
  function Shop() {
    const {products,setProducts,search} = useContext(AuthContext)
    const [duplicate,setDuplicate] = useState(products)
    const [basicActive, setBasicActive] = useState('');
    const {type}  = useParams()
    const nav = useNavigate()
    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
      nav(`/shop/${value}`);

    };
    useEffect(() => {
      if (type){
        const filtered = products.filter((item) => item.type === type)
        setDuplicate(filtered)
      }
   
    }, [basicActive]);
   
    console.log(search);
  
    return (
      <div>
      <br /><br /><br />
      <div className='container' style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <MDBTabs className='mb-3'>
          <MDBTabsItem>
            <MDBTabsLink className='shop-nav'  onClick={() => handleBasicClick('toys')} active={basicActive === 'toys'}>
            toys
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='shop-nav' onClick={() => handleBasicClick('dress')} active={basicActive === 'dress'}>
             dress
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='shop-nav' onClick={() => handleBasicClick('diaper')} active={basicActive === 'diaper'}>
            Diapers
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='shop-nav' onClick={() => handleBasicClick('walker')} active={basicActive === 'walker'}>
            Strollers & car Seats
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='shop-nav' onClick={() => handleBasicClick('footwear')} active={basicActive === 'footwear'}>
            Footwear
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
        </div>
        <div style={{display:'flex',flexWrap:'wrap'}}>
      {(search?search:duplicate).map((item)=>(
          <div key={item.id}>
          <MDBCard className='md-crd'>
        <MDBCardImage src={item.image} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'#85603F'}}><b>{item.title}</b></MDBCardTitle>
          <MDBCardText>
            {item.description}
          </MDBCardText>
          <MDBCardText>
          <p style={{color:'red'}}><del style={{color:'grey'}}>₹{item.oldprice}</del> ₹{item.price}</p> 
          </MDBCardText>
          <MDBBtn className='md-btn' onClick={()=>nav(`/shop/${item.type}/${item.id}`)}>Shop Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </div>
      ))}
      
      </div>
      <br /><br />
      </div>
    );
  }

  export default Shop