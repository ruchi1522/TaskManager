import { Routes } from '@angular/router';
import { TasksListComponent } from '../components/tasks-list/tasks-list.component';

export const routes: Routes = [
  { path: '', component: TasksListComponent }, // Default route
  { path: 'tasks', component: TasksListComponent } // Optional named route
];
