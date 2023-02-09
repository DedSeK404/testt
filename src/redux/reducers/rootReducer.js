import {
  Add_Todo,
  Edit_Todo,
  Done_Undone_Todo,
  Delete_Todo,
  FILTER,
  CHECKTODO,
  FILTERTASK,
} from "../action/typeAction";

const init = {
  tasks: [{
    id:1,
    description:"wash the dishes",
    isDone:false
  }],
  
   status:'all' }
 


function rootReducer(state = init, action) {
  switch (action.type) {
    case Add_Todo:
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case Delete_Todo:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case Done_Undone_Todo:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isComplete: !task.isComplete }
            : task
        ),
      };
    case Edit_Todo:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),

      };
     case FILTER :
      return{...state,status:action.payload}

      case CHECKTODO:
        return {
          ...state,
          tasks: state.tasks.map((e) =>
            e.id == action.payload.id
              ? 
              {...e, isDone: !action.payload.isDone }
              : e
          ),
        };
        case FILTERTASK:
      return {
        ...state,
        status: action.payload,
      };
   
    default:
      return state;
  }
}

export default rootReducer;
