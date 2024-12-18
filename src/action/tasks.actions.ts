import { createAction, props } from '@ngrx/store';
import { Task } from '../model/task.model';

export const loadTasks = createAction('[Tasks] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
  '[Tasks] Load Tasks Failure',
  props<{ error: any }>()
);
export const updateTask = createAction(
  '[Tasks] Update Task',
  props<{ task: Task }>()
);

export const updateTaskSuccess = createAction(
  '[Tasks] Update Task Success',
  props<{ task: Task }>()
);

export const updateTaskFailure = createAction(
  '[Tasks] Update Task Failure',
  props<{ error: any }>()
);
