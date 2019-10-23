import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  newTask: string ='';
  tasks: Todo []= [
    {completed: false, task: 'Walk the dog.' },
    {completed: false, task: 'Go to the store.' },
    {completed: false, task: 'Get gas.'},
    {completed: false, task: 'Wash the car.'},

  ]
  filterText: string;

  filteredTasks = [...this.tasks];

  completeTask(task){
    task.completed = true;
}

filterTasks(){
  this.filteredTasks = this.tasks.filter(item => item.task.toLowerCase().includes(this.filterText)
    );
    if (!this.filterText) {
      this.filteredTasks = [...this.tasks];
    }
  }

addTask() {
  const newItem = {
    task: this.newTask,
    completed: false
  };
  this.tasks.push(newItem);
  this.newTask = null;
  this.filteredTasks = [...this.tasks];
};

removeTask(i){
this.tasks.splice(i, 1);
this.filteredTasks = [...this.tasks];
};
}
