import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { StateTextPipe } from '../pipes/state-text.pipe';


@NgModule({
  declarations: [TasksListComponent, TaskFormComponent, StateTextPipe],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ]
})
export class TasksModule { }
