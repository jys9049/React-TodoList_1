import React, { useState } from "react";
import styled from "./TodoList.module.css";

export function TodoList({ todos, setTodos, deleteTodo }) {
  const [newValue, setNewValue] = useState("");

  const inputValue = (e) => {
    setNewValue(e.target.value);
    console.log(newValue)
  };

  const onUpdate = (id, value) => {
    console.log(value);
    if(value === '') {
      alert('할 일을 입력해 주세요.')
      return;
    }

    const newTodo = todos.map((item) => ({
      ...item,
      text: item.id === id ? (item.text = value) : item.text,
      update: item.id === id ? item.update = !item.update : item.update
    }));
    setTodos(newTodo);
    setNewValue('');
  };

  const onSubmit = (id) => {
    const newTodos = todos.map((item) => ({
      ...item,
      update: item.id === id ? item.update = !item.update : item.update
    }));
    setTodos(newTodos)
  };

  const onChecked = (id) => {
    const newTodos = todos.map((item) => ({
      ...item,
      checked: item.id === id ? item.checked = !item.checked : item.checked
    }));
    setTodos(newTodos)
  }

  useState(() => {
  }, [todos])


  return (
    <>
      <div className={styled.todoList}>
        {todos.map((todo) => (
          <div className={styled.itemContainer} key={todo.id}>
            <div>
              <input className={styled.checkBox} onClick={() => onChecked(todo.id)} type="checkbox" />
              {todo.update?
              <input className={styled.inputBox} type="text" onChange={inputValue}/> :
              <span className={todo.checked? styled.checkedTitle : styled.title}>{todo.text}</span> 
              }
            </div>
            <div className={styled.buttonGroup}>
              {todo.update ? (
                <button onClick={() => onUpdate(todo.id, newValue)}>수정완료</button>
              ) : (
                <button onClick={() => onSubmit(todo.id)}>수정</button>
              )}
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
