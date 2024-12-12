import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign.css';
import { MDBContainer, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { AuthContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sign() {
  const { login, setLogin } = useContext(AuthContext);
  const btn = useNavigate();

  // Refs for form fields
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const cPassword = cPasswordRef.current.value;
    
    if (login.find((item) => item.email === email)) {
      toast.info('You already have an account, please login');
      setTimeout(() => {
        btn('/login');
      }, 1600);
    } else if (password === cPassword) {
      setLogin([
        ...login,
        { username: usernameRef.current.value, email, password, cart: [] },
      ]);
      btn('/login');
    } else {
      toast.error('Passwords do not match');
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className='main-div'>
        <form onSubmit={submitHandler}>
          <div
            className='maindiv'
            style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className='sec-div'
              style={{
                width: '330px',
                height: '450px',
                borderRadius: '30px',
                boxShadow: '5px 5px 10px #47272b',
              }}
            >
              <h4 style={{ color: '#47272b', textAlign: 'center', marginTop: '20px' }}>
                Create Account
              </h4>
              <MDBContainer className='p-3 my-5 d-flex flex-column w-100'>
                <MDBInput
                  required
                  wrapperClass='mb-4'
                  name='username'
                  label='User name'
                  id='form3'
                  type='text'
                  style={{ color: '#47272b' }}
                  ref={usernameRef}
                />
                <MDBInput
                  required
                  wrapperClass='mb-4'
                  name='email'
                  label='Email address'
                  id='form4'
                  type='email'
                  style={{ color: '#47272b' }}
                  ref={emailRef}
                />
                <MDBInput
                  required
                  wrapperClass='mb-4'
                  name='password'
                  label='Password'
                  id='form1'
                  type='password'
                  style={{ color: '#47272b' }}
                  ref={passwordRef}
                />
                <MDBInput
                  required
                  wrapperClass='mb-4'
                  name='cPassword'
                  label='Confirm password'
                  id='form2'
                  type='password'
                  style={{ color: '#47272b' }}
                  ref={cPasswordRef}
                />
                <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                  <MDBBtn
                    type='submit'
                    className='mb-4'
                    style={{
                      borderRadius: '20px',
                      border: '0',
                      color: 'white',
                      background: '#47272b',
                      width: '110px',
                      height: '40px',
                    }}
                  >
                    Submit
                  </MDBBtn>
                </div>
              </MDBContainer>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}

export default Sign;
