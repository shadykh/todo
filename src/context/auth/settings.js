import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import superagent from 'superagent';

export const LoginContext = React.createContext();
const REACT_APP_SECRET = 'HDJIRVDMCDLdsjk5466@@$$$';

function LoginProvider(props) {

  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState({});
  const [capabilities, setCapabilities]  = useState([]);

  const validateToken = (token) => {
    try {
      const tokenUser = jwt.verify(token, REACT_APP_SECRET)
      setLoggedIn(true);
      setUser(tokenUser);
      cookie.save('auth', token);
    } catch(e) {
      setUser({});
      setLoggedIn(false);
      console.warn('Token Validation Error', e)
    }
  }

  const logout = () => {
   setUser({});
   setLoggedIn(false);
   cookie.remove('auth');
  }

  const can = (permission) => {
    return capabilities && capabilities.includes(permission);
  }

  const login = async (input) => {
    console.log('input', input);
    const API = `https://shady-auth-api.herokuapp.com`;
    try {
      const response = await superagent.post(`${API}/signin`)
        .auth( input.username, input.password );
        const {token} = response.body;
        setLoggedIn(true);
        setCapabilities(assignCapabilities(response.body.user.role))
        validateToken(token);

    } catch(e) {
      console.warn('Login Attempt Failed')
    }
  }

  const assignCapabilities =  (role) => {
    let setCapabilities;
    if(role === 'admin'){
      setCapabilities = ['read', 'create', 'update', 'delete'];
    };
    if(role === 'editor'){
      setCapabilities = ['read', 'create', 'update'];
    };
    if(role === 'writer'){
      setCapabilities = ['read', 'create'];
    };
    if(role === 'user'){
      setCapabilities = ['read'];
    };
    console.log('setCapabilities', setCapabilities);
    return setCapabilities;
  }
  const signup = async(input) => {
    console.log("INPUT", input)
    const API = `https://shady-auth-api.herokuapp.com`;
    try {
      const response = await superagent.post(`${API}/signup`)
      .send(input);
      const { token } = response.body;
      setLoggedIn(true);
      setCapabilities(response.body.user.capabilities);
      validateToken(token)
    } catch(e) {
      console.warn('Sign up failure')
    }
  }

  useEffect( () => {
    const token = cookie.load('auth') || null;
    validateToken(token);
  }, [])

  const sharedThings = {
    login,
    logout,
    can,
    user, setUser,
    loggedIn, capabilities, signup
  };

  return (
    <LoginContext.Provider value={sharedThings}>
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
