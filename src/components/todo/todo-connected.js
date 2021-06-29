import React, { useEffect, useState } from 'react';
import TodoForm from '../Form/Form';
import TodoList from '../List/List';
import useAjax from '../custom-hooks/useAjax';
import Settings from '../context/settings/settings.js';
import './todo.scss';


//const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const myOwnAPI = 'https://shady-api-server.herokuapp.com/api/favorite/todo';


const ToDo = () => {

  const [_addItem, _toggleComplete, _deleteItem, list] = useAjax(myOwnAPI);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleDelete={_deleteItem}
            handleComplete={_toggleComplete}
          />
        </div>
        <div>
          <Settings />
        </div>
      </section>
    </>
  );
};

export default ToDo;
