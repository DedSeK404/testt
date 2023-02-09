import {
  Add_Todo,
  CHECKTODO,
  Delete_Todo,
  Done_Undone_Todo,
  Edit_Todo,
  FILTER,
  FILTERTASK,
} from "./typeAction";

export const addTask = (newTask) => ({
  type: Add_Todo,
  payload: newTask,
});

export const deleteTask = (id) => ({
  type: Delete_Todo,
  payload: id,
});

export const doneUndoneTask = (id) => ({
  type: Done_Undone_Todo,
  payload: id,
});

export const editTask = (editedTask) => ({
  type: Edit_Todo,
  payload: editedTask,
});
export const filter=(state)=>({
  type:FILTER,
  payload:state
})
export const checktodo = (id,isDone) => {
  return {
    type: CHECKTODO,
    payload: {id, isDone}
  };
};
export const filtertodo = (status) => {
  return {
    type: FILTERTASK,
    payload: status,
  };
};