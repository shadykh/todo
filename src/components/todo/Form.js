import React, { useEffect, useContext } from 'react';

import { Form, Button } from 'react-bootstrap';

import useForm from './custom-hooks/useForm';

import Auth from '../../context/auth/auth';

import { LoginContext } from '../../context/auth/settings.js';



function TodoForm(props) {

  const [handleChange, handleSubmit] = useForm(submit);
  const userContext = useContext(LoginContext);

  function submit(item) {
    props.handleSubmit(item);
  }

  useEffect(() => {
    console.log('userContextTodoForm', userContext);
    console.log('userContextCapabilities', userContext.capabilities);

  }, [userContext.capabilities])

  if (props.loading) {
    console.log('props.loading', props.loading);
    <p>Loading...</p>
  } else {

    return (

      <>
        <strong>To Do Item</strong>

        <div className='divOpt'>

          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formGroupItem">
              <Form.Control name="task" type="text" placeholder="To Do Item" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formGroupAssigned">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control name="assignee" type="text" placeholder="Assigned To" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
              <Form.Label>Due Date</Form.Label>
              <Form.Control name="dueDate" type="date" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control name="difficulty" min="0" max="5" type="range" onChange={handleChange} />
            </Form.Group>

            <Auth capability="create">
            <Button variant="outline-primary" type='submit'>Add Item</Button>
            </Auth>

          </Form>
        </div>
      </>

    )
  }
}

export default TodoForm;
