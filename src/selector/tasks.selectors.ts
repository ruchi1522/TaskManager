import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TasksState } from '../reducer/tasks.reducer';

// Select the tasks state
export const selectTasksState = createFeatureSelector<TasksState>('tasks');

// Select all tasks
export const selectAllTasks = createSelector(
  selectTasksState,
  (state: TasksState) => state.tasks
);
