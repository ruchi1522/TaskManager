import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddTaskDialogComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { loadTasks } from '../../action/tasks.actions';
import { Task } from '../../model/task.model';
import { selectAllTasks } from '../../selector/tasks.selectors';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  searchQuery: string = '';
  tasks$: Observable<Task[]>;

  displayedColumns: string[] = [
    'title',
    'description',
    'deadline',
    'completed',
  ];

  constructor(private dialog: MatDialog, private store: Store) {
    console.log('Store initialized:', store);
    this.tasks$ = this.store.select(selectAllTasks);
  }

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }

  get filteredTasks(): Observable<Task[]> {
    return this.tasks$.pipe(
      map((tasks) =>
        tasks.filter((task) =>
          task.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      )
    );
  }

  addTask() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent);
  }

  onCompletionToggle(task: Task) {
    console.log('Task completion toggled', task);
    task.isCompleted = !task.isCompleted;
  }
}
