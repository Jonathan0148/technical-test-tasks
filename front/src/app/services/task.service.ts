import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { iTask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;
  private httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': environment.token
    })
  };

  constructor(private http: HttpClient) { }

  getTasks(): Observable<iTask[]> {
    return this.http.get<iTask[]>(this.apiUrl, this.httpOptions);
  }

  getTaskById(id: number): Observable<iTask> {
    return this.http.get<iTask>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  createTask(data: iTask): Observable<iTask> {
    return this.http.post<iTask>(this.apiUrl, data, this.httpOptions);
  }

  updateTask(id: number, data: iTask): Observable<iTask> {
    return this.http.put<iTask>(`${this.apiUrl}/${id}`, data, this.httpOptions);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { ...this.httpOptions, responseType: 'text' });
  }
}
