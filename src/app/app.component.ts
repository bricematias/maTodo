import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import { Task } from './shared/task.model';
import {TaskService} from "./task.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'todolist';
  task: Task[] | undefined;
  @Input() taskId: number = 0;

  taskSubscription: Subscription | undefined;

  constructor(private taskService: TaskService) {
  }
  ngOnInit(): void {
    this.taskSubscription = this.taskService.tasks$.subscribe((tasks: Task[ ]) => {
      this.task = tasks;
    });
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
  addTask():void{
    this.taskService.addTask()
  }
  deleteTask(): void {
    this.taskService.deleteTask(this.taskId);
  }
}
