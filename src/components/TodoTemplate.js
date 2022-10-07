import React, { useRef, useState } from "react";
import styled from "./TodoTemplate.module.css";

import TodoHead from './TodoHead';
import TodoInput from "./TodoInput";
import TodoList from './TodoList';

export function TodoTemplate() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'React',
      checked: false,
      update: false,
    },
    {
      id: 2,
      text: 'JavaScript',
      checked: false,
      update: false,
    },
    {
      id: 3,
      text: 'TypeScript',
      checked: false,
      update: false,
    },
  ])

  
  const [value, setValue] = useState('');

  const nextId = useRef(4);

  const inputValue = (e) => {
    setValue(e.target.value);
    console.log(value)
  }

  const addTodo = () => {

    if(value === '') {
      alert('할 일을 입력해 주세요')
      return;
    }

    const newTodo = {
      id: nextId.current,
      text: value,
      checked: false
    }
    setTodos(todos.concat(newTodo))
    nextId.current++
    setValue('');
  }

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id)
    console.log(filteredTodo)
    setTodos(filteredTodo);
  }

  return (
    <>
      <div className={styled.template}>
        <TodoHead />
        <TodoInput inputValue={inputValue} addTodo={addTodo} value={value} />
        <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default TodoTemplate;
