import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { iTask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/data`;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<iTask[]> {
    return this.http.get<iTask[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<iTask> {
    return this.http.get<iTask>(`${this.apiUrl}/${id}`);
  }

  createTask(data: iTask): Observable<iTask> {
    return this.http.post<iTask>(this.apiUrl, data);
  }

  updateTask(id: number, data: iTask): Observable<iTask> {
    return this.http.put<iTask>(`${this.apiUrl}/${id}`, data);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }  
}
