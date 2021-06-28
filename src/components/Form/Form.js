import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useForm from '../custom-hooks/useForm';


function TodoForm(props) {

  const [handleChange, handleSubmit] = useForm(submit);

  function submit(item) {
    props.handleSubmit(item);
  }

  return (

    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupItem">
          <Form.Label>To Do Item</Form.Label>
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
        {/*         <Form.Group controlId="formBasicRange">
          <Form.Label>Status</Form.Label>
          <Form.Control name="status" type="date" onChange={handleInputChange} /> 
          <Form.Control name="status" size="sm" as="select" onChange={handleInputChange}>
            <option>Completed</option>
            <option>Working on it</option>
          </Form.Control>
        </Form.Group> */}
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control name="difficulty" min="0" max="5" type="range" onChange={handleChange} />
        </Form.Group>
        <Button variant="outline-primary" type='submit'>Add Item</Button>
      </Form>
    </>

  )
}

export default TodoForm;
