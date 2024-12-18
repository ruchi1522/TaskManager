import { createReducer, on } from '@ngrx/store';
import { Task } from '../model/task.model';
import {
  loadTasks,
  loadTasksFailure,
  loadTasksSuccess,
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
  on(loadTasksFailure, (state, { error }) => ({ ...state, error }))
);
