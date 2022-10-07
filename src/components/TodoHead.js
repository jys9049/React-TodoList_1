import React from "react";
import styled from "./TodoHead.module.css"

export function TodoHead() {
  return (
    <>
      <div className={styled.head}>
        <h2 className={styled.mainTitle}>Todo List</h2>
        <h4 className={styled.subTitle}>오늘의 할 일을 적어보세요!</h4>
      </div>
    </>
  )
}

export default TodoHead