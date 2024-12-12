import React, { useContext, useRef } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { AuthContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { login, user, setUser } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userData = login?.find((item) => item.email === email);

    if (email === 'admin@gmail.com' && password === '1234') {
      navigate('/admin');
    } else if (userData && userData.password === password) {
      toast.success('Login Successfully');
      setUser(userData);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      toast.warning("You don't have an account. Sign up to continue...");
      setTimeout(() => {
        navigate('/Signup');
      }, 1000);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div
            className="maindiv"
            style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="sec-div"
              style={{
                width: '330px',
                height: '350px',
                borderRadius: '30px',
                boxShadow: '5px 5px 10px #47272b',
                color: 'white',
              }}
            >
              <h4 style={{ color: '#47272b', textAlign: 'center', marginTop: '20px' }}>Login</h4>
              <MDBContainer className="p-3 my-5 d-flex flex-column w-100">
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                  style={{ color: '#47272b' }}
                  ref={emailRef}
                />
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  style={{ color: '#47272b' }}
                  ref={passwordRef}
                />
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                  <MDBBtn
                    type="submit"
                    className="mb-4"
                    style={{
                      borderRadius: '20px',
                      border: '0',
                      color: 'white',
                      background: '#47272b',
                      width: '110px',
                      height: '40px',
                    }}
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <div className="text-center">
                  <p style={{ color: '#47272b' }}>
                    Not a member?{' '}
                    <span
                      className="sign-ms"
                      onClick={() => navigate('/Signup')}
                      style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </MDBContainer>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
