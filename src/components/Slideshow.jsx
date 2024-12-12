import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Navbar.css';
import imagess from '../assets/slide1.png'
import imagess2 from '../assets/slide2.png'
import imagess3 from '../assets/slide3.png'

export default function App() {
  const nav = useNavigate()
  return (
    
  
    <div className='container-fluid' style={{objectFit:'fill',marginTop:'9px'}}>
     <MDBCarousel showControls fade>   
      <MDBCarouselItem itemId={1}>
        <img onClick={()=>nav('/shop/toys')}  src={imagess} className='d-block w-100 slide-img' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img onClick={()=>nav('/shop/dress')} src={imagess2} className='d-block w-100 slide-img' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img onClick={()=>nav('/About/dress')} src={imagess3} className='d-block w-100 slide-img' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}
// https://www.babyamore.in/wp-content/uploads/2023/11/Lollipop-Banners-.gif