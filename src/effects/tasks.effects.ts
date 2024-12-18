import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';
import {
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
} from '../action/tasks.actions';

@Injectable()
export class TasksEffects {
  private actions$ = inject(Actions);
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.apiService.getTasks().pipe(
          tap((tasks) => console.log('Fetched tasks:', tasks)),
          map((tasks) => loadTasksSuccess({ tasks })),
          catchError((error) => {
            console.error('Error fetching tasks:', error);
            return of(loadTasksFailure({ error }));
          })
        )
      )
    )
  );

  constructor(private apiService: ApiService) {}
}
