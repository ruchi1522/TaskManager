import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { tasksReducer } from '../reducer/tasks.reducer';
import { provideEffects } from '@ngrx/effects';
import { TasksEffects } from '../effects/tasks.effects';
import { ApiService } from '../services/api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ tasks: tasksReducer }),
    provideEffects([TasksEffects]),
    // ApiService,
  ],
};
