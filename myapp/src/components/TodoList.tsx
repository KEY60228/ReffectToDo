import React, { useState } from 'react';

function TodoList() {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false,
    },
    {
      task: 'Learn React Hook',
      isCompleted: false,
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false,
    },
  ];

  const [todos, setTodo] = useState(initialState);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={ index }>{ todo.task }</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;