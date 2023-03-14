import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './shared/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks: Task[] = [
    {
      id: 1,
    }
  ]

  public tasks$: BehaviorSubject<Task[]>;

  constructor() {
    this.tasks$ = new BehaviorSubject<Task[]>(this.tasks);
  }

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex((x) => x.id === taskId);
    if (index >= 1) {
      this.tasks.splice(index, 1);
      this.tasks$.next(this.tasks);
    }
  }

  addTask(): void {
    const id = this.tasks.length === 0 ? 1 : Math.max.apply(Math, this.tasks.map((task) => { return task.id})) + 1;

    this.tasks.push({
      id,
    });
    this.tasks$.next(this.tasks);
  }

}
