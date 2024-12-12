

import React, { useState, useContext } from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../App';

export default function Paymentsec() {
  const nav = useNavigate();
  const { products } = useContext(AuthContext);
  const { id } = useParams();

  const paydata = products.find((item) => item.id === parseInt(id));

  const [formvalue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const payBtn = () => {
    toast.success('Payment Successful!');
  };

  if (!paydata) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <ToastContainer />
      <br />
      <br />
      <br />
      <MDBContainer fluid className="p-5">
        <MDBCard>
          <MDBCardBody>
            <MDBRow className="d-flex justify-content-center pb-5">
              <MDBCol md="7" xl="5" className="mb-4 mb-md-0">
                <img
                  style={{ height: '60px' }}
                  src="https://seeklogo.com/images/B/baby-logo-6ABC3EF92F-seeklogo.com.png"
                  alt="Logo"
                />
                <h2 style={{ color: '#47272b', letterSpacing: '2px', fontFamily: 'italic' }}>
                  Babi<span style={{ color: 'black' }}>fy</span>
                </h2>
                <br />
                <div className="py-4 d-flex flex-row">
                  <h5>
                    <span className="far fa-check-square pe-2"></span>
                    <b>ELIGIBLE</b> |
                  </h5>
                  <span className="ps-2">Pay</span>
                </div>
                <h4 style={{ color: '#47272b' }}>{paydata.title}</h4>
                <div className="d-flex pt-2">
                  <div>
                    <p>
                      <b>
                        Product Price: <span className="text-success">₹{paydata.price}</span>
                      </b>
                    </p>
                  </div>
                  <div className="ms-auto">
                    <p className="text-primary">
                      <MDBIcon fas icon="plus-circle" className="text-primary pe-1" />
                      Add insurance card
                    </p>
                  </div>
                </div>
                <p>
                  Insurance claims and all necessary dependencies will be submitted to your
                  insurer for the covered portion of this order.
                </p>
                <div className="rounded d-flex" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="p-2">Aetna-Open Access</div>
                  <div className="ms-auto p-2">OAP</div>
                </div>
                <hr />
                <div className="pt-2">
                  <div className="d-flex pb-2">
                    <div>
                      <p>
                        <b>
                          Customer Balance:{' '}
                          <span className="text-success">₹{paydata.oldprice - paydata.price}</span>
                        </b>
                      </p>
                    </div>
                    <div className="ms-auto">
                      <p className="text-primary">
                        <MDBIcon fas icon="plus-circle" className="text-primary pe-1" />
                        Add payment card
                      </p>
                    </div>
                  </div>
                  <p>
                    This is an estimate for the portion of your order (not covered by insurance)
                    due today. Once insurance finalizes their review, refunds and/or balances will
                    reconcile automatically.
                  </p>
                  <div className="d-flex flex-row pb-3">
                    <div className="d-flex align-items-center pe-2">
                      <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                    </div>
                    <div className="rounded border d-flex w-100 p-3 align-items-center">
                      <p className="mb-0">
                        <MDBIcon fab icon="cc-visa" size="lg" className="text-primary pe-2" /> Visa
                        Debit Card
                      </p>
                      <div className="ms-auto">**3456</div>
                    </div>
                  </div>
                  <div className="d-flex flex-row pb-3">
                    <div className="d-flex align-items-center pe-2">
                      <MDBRadio name="radioNoLabel" id="radioNoLabel2" />
                    </div>
                    <div className="rounded border d-flex w-100 p-3 align-items-center">
                      <p className="mb-0">
                        <MDBIcon fab icon="cc-mastercard" size="lg" className="text-dark pe-2" />{' '}
                        Mastercard Office
                      </p>
                      <div className="ms-auto">**1038</div>
                    </div>
                  </div>
                  <MDBBtn onClick={payBtn} block size="lg">
                    Proceed to payment
                  </MDBBtn>
                </div>
              </MDBCol>
              <MDBCol md="5" xl="4" offsetXl="1">
                <div className="py-4 d-flex justify-content-end">
                  <h6 style={{ cursor: 'pointer' }}>
                    <a onClick={() => nav('/')}>Cancel and return to website</a>
                  </h6>
                </div>
                <div className="rounded d-flex flex-column p-2" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="p-2 me-3">
                    <h4>Order Recap</h4>
                  </div>
                  <div className="p-2 d-flex">
                    <MDBCol size="8">Product Price</MDBCol>
                    <div className="ms-auto">₹{paydata.price}</div>
                  </div>
                  <div className="p-2 d-flex">
                    <MDBCol size="8">Customer Balance</MDBCol>
                    <div className="ms-auto">
                      <b>₹{paydata.oldprice - paydata.price}</b>
                    </div>
                  </div>
                  <div className="border-top px-2 mx-2"></div>
                  <div className="p-2 d-flex pt-3">
                    <MDBCol size="8">
                      <b>Total</b>
                    </MDBCol>
                    <div className="ms-auto">
                      <b className="text-success">₹{paydata.oldprice - 15}</b>
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>  
  );
}
