import React, { useState, useContext } from "react";
import { If, Then, Else } from 'react-if';
import { LoginContext } from './settings.js';
import { Button, ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
function Login() {

  const userContext = useContext(LoginContext);

  const [signin, setSignin] = useState(true)

  const handleChange = (e) => {
    userContext.setUser({ ...userContext.user, [e.target.name]: e.target.value })
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // send the user object to: context
    userContext.login(userContext.user);
  }

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    userContext.signup(userContext.user);
  }
  const form = signin ?
    (<Form className='signForm' onSubmit={handleSubmitLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password" type="password" onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Signin
      </Button>
      <Button variant="primary" onClick={() => setSignin(!signin)}>
        Create New Account
      </Button>
    </Form>

    ) :
    (
      <Form className='signForm' onSubmit={handleSubmitSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="create username" name="username" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="create password" name="password" type="password" onChange={handleChange} />
        </Form.Group>
        <ButtonGroup className="radio">
          <Button variant="primary" type="radio" name="role" value="user" onClick={handleChange}>User</Button>
          <Button variant="primary" type="radio" name="role" value="editor" checked={true} onClick={handleChange}>Editor</Button>
          <Button variant="primary" type="radio" name="role" value="admin" onClick={handleChange}>Admin</Button>
        </ButtonGroup>
        <Button variant="primary" type="submit">
          Create New Account
        </Button>
        <Button variant="primary" onClick={() => setSignin(!signin)}>
          Switch to Login Form
        </Button>
      </Form> 
    
  )

  return (
    <If condition={userContext.loggedIn}>
      <Then>
        <button onClick={userContext.logout}>Sign Out</button>
      </Then>
      <Else>
        {form}
      </Else>
    </If>
  )

}

export default Login;
