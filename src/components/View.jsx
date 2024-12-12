import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../App'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Veiw from './View.css';



const View = () => {
  const nav = useNavigate();
  const { products, user } = useContext(AuthContext);
  const { id } = useParams();

  // Find the product by ID
  let data = products.find((item) => item.id == id);

  // Handle the case when the product is not found
  if (!data) {
    return <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Product not found</h3>;
  }

  const clickHandle = () => {
    let userData = user.cart.find((item) => item.id === data.id);
    if (!userData) {
      toast.info('Product is added to your Cart');
      user.cart.push({ ...data, quantity: 1 });
    } else {
      userData.quantity += 1;
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <MDBCard style={{ marginTop: '40px', width: '400px', boxShadow: '10px 5px 5px grey' }}>
          <MDBCardImage src={data.image} position="top" alt={data.title || 'Product Image'} />
          <MDBCardBody>
            <MDBCardTitle>{data.title}</MDBCardTitle>
            <MDBCardText>{data.description}</MDBCardText>
            <MDBCardText>
              <p>
                <b>₹{data.price}</b>
              </p>
            </MDBCardText>
            <MDBBtn className="views1-btn" onClick={() => nav(`/payment/${data.id}`)}>
              Buy Now
            </MDBBtn>
            <MDBBtn className="views2-btn" onClick={user ? clickHandle : () => nav('/Login')}>
              Add to Cart
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <ToastContainer />
      </div>
    </div>
  );
};  
export default View;
