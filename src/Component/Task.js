import React from "react";
import { connect, useDispatch } from "react-redux";
import EditTask from "./EditTask";
import "../App.css";
import { checktodo, deleteTask, doneUndoneTask, editTask } from "../redux/action/action";

<div className="" />;

function Task({ task, doneUndoneTask, deleteTask, id, isDone }) {
  console.log(isDone)
  const dispatch = useDispatch();
  const handleChecker = () => dispatch(checktodo(id, isDone));
  return (
    <div className="card">
      <p
        onClick={() => doneUndoneTask(task.id)}
        style={
          task.isComplete
            ? { textDecoration: "line-through", opacity: "0.3" }
            : { cursor: "pointer" }
        }
      >
        {task.text}
      </p>
      
      <div className="buttons">
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <EditTask oldTask={task} />
        <input type="checkbox"  onClick={handleChecker}/>
      </div>
    </div>
  );
}

export default connect(null, { deleteTask, doneUndoneTask, editTask })(Task);
