import React from 'react';
import TodoForm from './Form';
import TodoList from './List';
import useAjax from './custom-hooks/useAjax';
import Settings from '../../context/settings/settings';
import './todo.scss';


const API = 'https://shady-auth-api.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [_addItem, _toggleComplete, _deleteItem, list] = useAjax(API);

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
