import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { editTask } from "../redux/action/action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function EditTask({ oldTask, editTask }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(oldTask.text);
  }, [show, oldTask.text]);
  const toggleModal = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedTask = { ...oldTask, text: text };
    editTask(modifiedTask);
    toggleModal();
  };

  return (
    <div>
      <button onClick={toggleModal}>Edit</button>
      <Modal isOpen={show} style={customStyles} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit">Confirm</button>
          <button onClick={toggleModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
}

export default connect(null, { editTask })(EditTask);
