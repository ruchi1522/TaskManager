import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './add-task.component.html',
  // styles: [
  //   `
  //     .full-width {
  //       width: 100%;
  //       margin-top: 10px;
  //     }
  //   `
  // ]
})
export class AddTaskDialogComponent {
  taskData = {
    title: '',
    description: '',
    deadline: '',
    isCompleted: false,
  };

  constructor(
    private dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private apiService: ApiService
  ) {}

  onSave() {
    if (!this.isValidDate(this.taskData.deadline)) {
      alert('Please enter a valid date in YYYY-MM-DD format.');
      return;
    }

    this.apiService.addTask(this.taskData).subscribe((response) => {
      this.dialogRef.close(response);
    });
  }

  isValidDate(dateString: string): boolean {
    // Check if the date format is YYYY-MM-DD and if the date is valid
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format

    const date = new Date(dateString);
    if (!date.getTime() && date.getTime() !== 0) return false; // Invalid date (NaN value)

    return date.toISOString().slice(0, 10) === dateString;
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
