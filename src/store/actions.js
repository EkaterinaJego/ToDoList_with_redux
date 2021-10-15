import * as actions from "./actionTypes";

export const addTask = (task) => ({
  type: actions.task_add,
  payload: task,
});

export const toggleTask = (id) => ({
  type: actions.task_toggle,
  payload: { id },
});

export const removeTask = (id) => ({
  type: actions.task_remove,
  payload: { id },
});
