import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task.service";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() taskId: number = 1;
  task: string = 'John Doe';
  constructor(private taskService: TaskService) {
  }
  ngOnInit():void{
  }

  addTask():void{
    this.taskService.addTask()
  }
  deleteTask(): void {
    this.taskService.deleteTask(this.taskId);
  }
}
