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
    <strong>To Do Item</strong>
    <div  className='divOpt'>
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
        <Button variant="outline-primary" type='submit'>Add Item</Button>
      </Form>
      </div>
    </>

  )
}

export default TodoForm;
