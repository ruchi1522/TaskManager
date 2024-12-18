import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, TaskCreate } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }
  sayHello(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello/${name}`);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks/`);
  }

  addTask(task: TaskCreate): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks/`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${task.id}/`, task);
  }
}
export type { Task };
