import './App.css';
import React, { useState } from 'react';

const TodoItem = ({ item, done }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', fontSize: '26px' }}>
      <span>{item}</span>
      <button onClick={() => done(item)}>done</button>
    </div>
  );
};

const AddNewItem = ({ addNewTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const changeValue = e => {
    e.preventDefault();
    if (!!e.target.value) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div>
      <h6>Add new TODO:</h6>
      <input type='text' value={inputValue} onChange={e => changeValue(e)} />
      <button
        onClick={() => {
          addNewTodo(inputValue);
          setInputValue('');
        }}
      >
        add
      </button>
    </div>
  );
};

function App() {
  const [todoList, setTodoList] = useState(['eat', 'sleep', 'work']);

  const done = value => {
    const newTodo = todoList.filter(item => item !== value);
    setTodoList(newTodo);
  };

  const addNewTodo = value => {
    setTodoList(prev => [...prev, value]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <AddNewItem addNewTodo={addNewTodo} />
        {todoList.map(item => (
          <TodoItem key={item} item={item} done={done} />
        ))}
      </header>
    </div>
  );
}

export default App;
