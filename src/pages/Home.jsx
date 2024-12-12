import React from 'react';
import {
  MDBCard,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nav = useNavigate()
  return (
    <>
    <br /><br /><br />
    <div className='container-fluid'>
    <MDBCarousel showControls interval={3000}>
      <MDBCarouselItem itemId={1} interval={1000}>
        <img src='https://obori.in/cdn/shop/files/banner_1_1800x.png?v=1701329589' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://obori.in/cdn/shop/files/banner_2_1800x.png?v=1700305973' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://obori.in/cdn/shop/files/banner_3_1_1800x.png?v=1700306035' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>

    <div className='container-fluid'>
      <div className='row p-5 brown-banner' style={{background:'#e6c5c3'}}>
        <div className='col-3 text-center'>
          <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/4.png?v=1629206294'className='p-3 brown-img1'/>
          <h4 className='brown1-h4'>FOR BABIES AND KIDS</h4>
          <p className='brown1-p'>not boys and girls</p>
        </div>
        <div className='col-3 text-center'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/1.png?v=1629206830' className='p-3 brown-img2'/>
          <h4 className='brown2-h4'>EASY WEAR</h4>
          <p className='brown2-p'>day to night comfort</p>
        </div>
        <div className='col-3 text-center'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/2.png?v=1629206854'className='p-3 brown-img3'/>
          <h4 className='brown3-h4'>HANDPICKED FABRICS</h4>
          <p className='brown3-p'>for all seasons</p>
        </div>
        <div className='col-3 text-center'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/5.png?v=1629206906'className='p-3 brown-img4'/>
          <h4 className='brown4-h4'>MADE IN INDIA</h4>
          <p className='brown4-p'>with lots of love</p>
        </div>
      </div>
    </div> 
    
    <div className='container' style={{display:'flex',justifyContent:'center',marginTop:'70px'}}>
        <h1 style={{fontFamily:" Gelasio, serif",color:'black',fontSize:'35px'}}>New Arrivals</h1>
    </div>
    <div className='container' style={{display:'flex',justifyContent:'center'}}>
        <h5 style={{fontFamily:"sans-serif",fontSize:'18px'}}>Shope The Drop</h5>
    </div>

    <div className='container-fluid g-3 p-0 w-100 mt-4'>
      <div className='row g-2 '>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3247_360x.png?v=1629207791' className='img-fluid shadow-4 p-0 w-100' alt='...' style={{borderRadius:'10px'}} />
        <button onClick={()=>nav('/shop/dress')} className='shop-now'>Shop now</button>
        </div>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3407_360x.png?v=1629207762' className='img-fluid shadow-4 p-0 w-100' alt='...' style={{borderRadius:'10px'}}/>
        <button onClick={()=>nav('/shop/dress')} className='shop-now'>Shop now</button>
        </div>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3170_360x.png?v=1629207777' className='img-fluid shadow-4 w-100' alt='...' style={{borderRadius:'10px'}}/>
        <button onClick={()=>nav('/shop/dress')} className='shop-now'>Shop now</button>
        </div>
        <div className='col-3'>
        <img src='https://cdn.shopify.com/s/files/1/0592/0659/8852/files/281A3447_360x.png?v=1629207858' className='img-fluid shadow-4 w-100' alt='...' style={{borderRadius:'10px'}}/>
        <button onClick={()=>nav('/shop/dress')} className='shop-now'>Shop now</button>
        </div>
      </div>
    </div>
   <MDBRow className='row-col-1 rowcols-md-12'>
    <MDBCol>
    <MDBCard className='video-img'>
    <video autoPlay loop muted playsInline  >
        <source  src="https://cdn.shopify.com/videos/c/o/v/db2543402179449eaa2d267e4ff4f685.mov" type="video/mp4" />
      </video>
    </MDBCard>
    </MDBCol>
   </MDBRow>

   <div className='container-fluid g-3 p-0 card-section-2'>
      <div className='row g-2'>
        <div className='col-3'>
        <img src='https://obori.in/cdn/shop/products/1_95539596-bce1-4780-947d-cfcb33732b77_800x.jpg?v=1651755474' className='img-fluid shadow-4 p-0 w-100 img1-card2' alt='...' style={{borderRadius:'10px'}} />
        <button onClick={()=>nav('/shop/dress')} className='shop-now2'>Shop now</button>
        </div>
        <div className='col-3'>
        <img src='https://obori.in/cdn/shop/products/1_fcc9e74d-1474-48cf-ac3c-d60ad5a3b7a5_800x.jpg?v=1651755268' className='img-fluid shadow-4 p-0 w-100 img2-card2' alt='...' style={{borderRadius:'10px'}}/>
        <button onClick={()=>nav('/shop/dress')} className='shop-now2'>Shop now</button>
        </div>
        <div className='col-3'>
        <img src='https://obori.in/cdn/shop/products/1_30100b12-acf5-4748-a65c-0882dc966587_800x.jpg?v=1651755243' className='img-fluid shadow-4 w-100 img3-card2' alt='...' style={{borderRadius:'10px'}}/>
        <button onClick={()=>nav('/shop/dress')} className='shop-now2'>Shop now</button>
        </div>
        <div className='col-3'>
        <img src='https://obori.in/cdn/shop/products/1_c84c669d-d6c7-4386-9a49-e646576366d3_400x.jpg?v=1651754842' className='img-fluid shadow-4 w-100 img4-card2' alt='...' style={{borderRadius:'10px'}}/>
        <button onClick={()=>nav('/shop/dress')} className='shop-now2'>Shop now</button>
        </div>
      </div>
    </div>

   <img src='https://obori.in/cdn/shop/files/Sleepwear_1_1800x.jpg?v=1652098767' className='img-fluid shadow-4 w-100 childrens-img' alt='...' />
   <h6 className='lastimg-h6'>FOR DAY AND NIGHT</h6>
   <h2 className='lastimg-h2'>Old School Sleep Suits</h2>
   <button onClick={()=>nav('/shop/dress')} className='last-button'>Shop The Range</button>
    </div>

    </>
  );
}
export default Home; 
