import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem,MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const nav = useNavigate()
  return (
  <div >
  <div className='container'>
    <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px',marginTop:'200px' }}>
      <h2 style={{color:'black'}}>Contact us</h2>

      <MDBValidationItem invalid feedback='Please provide your name.'>
        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide your email.'>
        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide mail subject.'>
        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide a message text.'>
        <MDBTextArea wrapperClass='mb-4' label='Message' required />
      </MDBValidationItem>

      <MDBValidationItem feedback=''>
        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
      </MDBValidationItem>

      <MDBBtn onClick={()=>nav('/')} type='submit' style={{background:"#47272b"}} block className='my-4'>
        Send
      </MDBBtn>
    </MDBValidation>
    </div>
    </div>
  );
}