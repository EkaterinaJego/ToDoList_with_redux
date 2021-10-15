import * as actions from "./actionTypes";

let lastId = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.task_add:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          completed: false,
        },
      ];

    case actions.task_toggle:
      return state.map((task) => {
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed };
        return task;
      });

    case actions.task_remove:
      return state.filter((task) => action.payload.id !== task.id);

    default:
      return state;
  }
};

export default reducer;
