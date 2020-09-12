import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ADD_TODO, DELETE_TODO, MARK_AS_DONE} from './redux/constants';
import Select from 'react-select';
import './App.css';

function App() {
  const [localState, setLocalState] = useState({
    task: ''
  });
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onTaskChange = (e) => {
    e.persist();
    setLocalState((prevState) => {
      return({...prevState,
        task: e.target.value
      });
    });
  };

  const onAddTodo = () => {
    const id = todos.length ? (Math.max(...todos.map(todo => todo.id)) + 1) : 200;
    dispatch({
      type: ADD_TODO,
      task: localState.task,
      id,
      origin: 'react'
    });
  };

  const onDeleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      id,
      origin: 'react'
    });
  };

  const markAsDone = (id) => {
    dispatch({
      type: MARK_AS_DONE,
      id,
      origin: 'react'
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h2>React/Redux ToDos Manager</h2>
        <hr />
        <div className="page">
          <div>
            <input
              type="text"
              className="input-large"
              style={{marginBottom: 0, marginRight: '5px'}}
              value={localState.task}
              onChange={onTaskChange}
            />
            <a href="#" className="btn btn-primary" onClick={onAddTodo}>New</a>
          </div>
          <hr />
          <table className="table striped">
            <thead>
              <tr>
                <th>Task</th><th>Done</th><th></th>
              </tr>
            </thead>
            <tbody>
            {
              todos.map((todo) => {
                return(
                  <tr key={todo.id}>
                    <td>{todo.task}</td>
                    <td>
                    {
                      todo.done ?
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-square-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg> :
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-square-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    }
                    </td>
                    <td><a className="btn" href="#" onClick={() => {markAsDone(todo.id)}}>Done with {todo.id}</a></td>
                    <td><a className="btn" href="#" onClick={() => {onDeleteTodo(todo.id)}}>Delete {todo.id}</a></td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default App;
