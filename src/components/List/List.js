import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge, CloseButton, Toast, Button } from "react-bootstrap";
import "./List.scss";

function TodoList(props) {
  return (
    <>
      <strong> When you click on the item, you toggle it's status.</strong>
      <ListGroup className="ListGroup">
        {props.list.map((item) => (
          <ListGroup.Item
            variant={item.complete === true ? "success" : "danger"}
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <Toast>
              <Toast.Header closeButton={false}>
                <Badge
                  variant={item.complete === true ? "success" : "danger"}
                  className={item.complete === true ? "true" : "false"}
                >
                  {item.complete === true ? "Complete" : "Pending"}
                </Badge>
                <strong>{item.assignee}</strong>
                <CloseButton
                  variant="light"
                  className="btn-close"
                  onClick={() => props.handleDelete(item._id)}
                />
              </Toast.Header>
              <Toast.Body onClick={() => props.handleComplete(item._id)}>
                <p>{item.task}</p>
                <div className="diff-date">
                  <small>Due Date: {item.dueDate}</small>
                  <small>difficulty: {item.difficulty}</small>
                </div>
              </Toast.Body>
            </Toast>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default TodoList;

/*
<span onClick={() => props.handleComplete(item._id)}>
<h5>Task:</h5>
<p>{item.text}</p>
<h5>Difficulty:</h5>
<p>{item.difficulty}</p>
<h5>Assigned to:</h5>
<p>{item.assignee}</p>
<h5>Due Date:</h5>
<p>{item.date}</p>
<h5>Completed:</h5>
<p>{`${item.complete === true ? 'Yes':'No'}`}</p>
</span>
<Button variant="outline-primary" onClick={() => props.handleDelete(item._id)}>Delete</Button>
<Button variant="outline-primary" onClick={() => props.handleComplete(item._id)}>Mark Completed</Button> */
