import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTask, filtertodo } from "../redux/action/action";

function AddTask({ addTask }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newtodo = {
      text: text,
      id: Date.now(),
      isDone: false,
    };
    addTask(newtodo);
    setText("");
  };
  return (
    <div>
      <h1>My To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Add</button>
        <div>
          <input type="radio" name="task" value="All"  onClick={(e) => dispatch(filtertodo(e.target.value))} />
          <label className="form-label" >
            All
          </label>
        </div>
        <div>
          <input type="radio" name="task" value="done"  onClick={(e) => dispatch(filtertodo(e.target.value))} />
          <label className="form-label" >
            Done
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="undone"
            
            onClick={(e) => dispatch(filtertodo(e.target.value))}
          />
          <label className="form-label" >
            undone
          </label>
        </div>
      </form>

      
    </div>
  );
}

export default connect(null, { addTask })(AddTask);
