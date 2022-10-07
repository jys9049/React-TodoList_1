import React, { useState } from "react";
import styled from "./TodoInput.module.css"

export function TodoInput({inputValue, addTodo, value}) {
  return (
    <div className={styled.todoInputGroup}>
      <input className={styled.inputText} type="text" onChange={inputValue} value={value} />
      <button className={styled.addButton} onClick={addTodo}>추가</button>
    </div>
  )
}

export default TodoInput