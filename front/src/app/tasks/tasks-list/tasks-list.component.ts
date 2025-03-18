import { Component, OnInit } from '@angular/core';
import { iTask } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  standalone: false
})
export class TasksListComponent implements OnInit {
  tasks: iTask[] = [];
  selectedTask: iTask | null = null;
  isModalOpen = false;

  constructor(
    private _taskService: TaskService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this._taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  openModal(task?: iTask): void {
    this.selectedTask = task || { title: '', description: '', state: 0 };
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedTask = null;
  }

  handleFormSubmit(): void {
    this.getTasks();
    this.closeModal();
  }

  deleteTask(taskId?: number): void {
    if (taskId) {
      if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        this._taskService.deleteTask(taskId).subscribe(() => {
          this.tasks = this.tasks.filter(task => task.id !== taskId);
          this.toastr.success('Tarea eliminada correctamente.', 'Éxito');
        });
      }
    }
  }
}
