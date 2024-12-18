import { createReducer, on } from '@ngrx/store';
import { Task } from '../model/task.model';
import {
  loadTasks,
  loadTasksFailure,
  loadTasksSuccess,
  updateTaskSuccess,
} from '../action/tasks.actions';

export interface TasksState {
  tasks: Task[];
  error: any;
}

export const initialState: TasksState = {
  tasks: [],
  error: null,
};

export const tasksReducer = createReducer(
  initialState,
  on(loadTasks, (state) => ({ ...state, error: null })),
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(loadTasksFailure, (state, { error }) => ({ ...state, error })),
  on(updateTaskSuccess, (state, { task }) => {
    return {
      ...state,
      tasks: state.tasks.map((t) =>
        t.id === task.id ? { ...t, is_completed: task.is_completed } : t
      ),
    };
  })
);
