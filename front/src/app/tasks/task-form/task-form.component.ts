import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { iTask } from '../../models/task.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task: iTask = { title: '', description: '', state: 0 };
  @Output() formSubmit = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private _taskService: TaskService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  saveTask(): void {
    if (this.task.id) {
      this._taskService.updateTask(this.task.id, this.task).subscribe(() => {
        this.toastr.success('Tarea actualizada correctamente.', 'Éxito');
        this.formSubmit.emit();
      });
    } else {
      this._taskService.createTask(this.task).subscribe(() => {
        this.toastr.success('Tarea creada correctamente.', 'Éxito');
        this.formSubmit.emit();
      });
    }
  }
}
