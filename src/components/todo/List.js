import React, { useContext, useState } from "react";
import { ListGroup, Badge, CloseButton, Toast, Button } from "react-bootstrap";
import { SettingContext } from "../../context/settings/context.js";
import Pagination from "./pagination.js";
import Auth from '../../context/auth/auth.js';
import "./List.scss";

function TodoList(props) {
  console.log('TodoList(props)', props);

  const context = useContext(SettingContext);

  const [currentPage, setCurrentPage] = useState(1);

  let list = props.list;

  if (context.sortField === "name") {
    list.sort((a, b) => {
      if (a.assignee.toUpperCase() > b.assignee.toUpperCase()) return 1;
      if (a.assignee.toUpperCase() < b.assignee.toUpperCase()) return -1;
      return 0;
    });
  } else if (context.sortField === "difficulty") {
    list.sort((a, b) => {
      return a.difficulty - b.difficulty;
    });
  } else if (context.sortField === "task") {
    list.sort((a, b) => {
      if (a.task.toUpperCase() > b.task.toUpperCase()) return 1;

      if (a.task.toUpperCase() < b.task.toUpperCase()) return -1;

      return 0;
    });
  }

  if (context.completed) {
    list = list.filter((item) => !item.complete);
  }

  const indexOfLastTask = currentPage * context.displayCount;
  const indexOfFirstTask = indexOfLastTask - context.displayCount;
  const currentTasks = list.slice(indexOfFirstTask, indexOfLastTask);
  context.setTotalTasks(list.length);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <strong> When you click on the item, you toggle it's status.</strong>
      <Auth capability="read">
        <ListGroup className="ListGroup">
          {currentTasks.map((item) => (
            <ListGroup.Item
              variant={item.complete === true ? "success" : "danger"}
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <Toast>
                <Toast.Header closeButton={false}>
                  <Auth capability="update">
                    <Badge
                      variant={item.complete === true ? "success" : "danger"}
                      className={item.complete === true ? "true" : "false"}
                    >
                      {item.complete === true ? "Complete" : "Pending"}
                    </Badge>
                  </Auth>
                  <strong>{item.assignee}</strong>
                  <Auth capability="delete">
                    <CloseButton
                      variant="light"
                      className="btn-close"
                      onClick={() => props.handleDelete(item._id)}
                    />
                  </Auth>
                </Toast.Header>
                <Toast.Body >
                  <p>{item.task}</p>
                  <div className="diff-date">
                    <small>Due Date: {item.dueDate}</small>
                    <small>difficulty: {item.difficulty}</small>
                    <Auth capability="update">
                      <Button id='toggleTask' variant={item.complete === true ? "danger" : "success"} onClick={() => props.handleComplete(item._id)}>
                        {item.complete === true ? "Toggle Pending" : "Toggle Complete"}
                      </Button>
                    </Auth>
                  </div>
                </Toast.Body>
              </Toast>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Auth>
      <div>
        <Pagination
          tasksPerPage={context.displayCount}
          totalTasks={context.totalTasks}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default TodoList;
