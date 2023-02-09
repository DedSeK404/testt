import React from "react";
import { connect, useSelector } from "react-redux";
import Task from "./Task";

function TodoList({ todoList }) {
  const status =useSelector(state =>state.status)
  console.log(status)
  return (
    <div>
      {todoList.filter((el) => status == "done" ? el.isDone : status == "undone" ? !el.isDone : el ).map((el) => (
        <Task task={el} key={el.id} id={el.id} isDone={el.isDone} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.tasks,
});

export default connect(mapStateToProps)(TodoList);
