import React from 'react';

function About() {
  return (
    <div >
      <br /><br /><br /><br /><br />
      <div style={{ width: '100%', textAlign: 'center', color: 'black', letterSpacing: '2.9px', fontStyle: 'italic'}}>
        <h6 style={{ color: '#47272b' }}>ABOUT US</h6>
        <br />
        <br />
        <h2>Kerala's No.1</h2>
        <h3>Baby Store</h3>
        <br />
        <h3 style={{ color: '#47272b' }}>_</h3>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
         <img
          style={{
            borderRadius: '20px',
            width: '100%',
            boxShadow: '10px 10px 10px #47272b',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            width: '20%'
          }}
          src='https://cocooncare.in/cdn/shop/files/Testimonial_2.jpg?v=1688306414&width=600'
          alt='baby store'
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.0)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        />
        </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', textAlign: 'center', color: 'black', letterSpacing: '2.9px', fontStyle: 'italic',marginTop:'40px' }}>
          <h4>Made<span style={{ color: '#47272b' }}> With Love</span> And</h4>
          <h4>A Touch Of Fashion</h4>
        </div>
        <div style={{ width: '50%', textAlign: 'left', color: 'black', letterSpacing: '2.9px', fontStyle: 'italic', marginTop: '30px' }}>
          <h6>Baby shops can have high demand because parents are willing to invest in quality products for their children. They can also have repeat customers as their children grow and their needs change.</h6>
        </div>
      </div>
 
    </div>
  );
}

export default About;