import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  taskArray=[{taskName:'brush teeth', isCompleted : false}];
        onSubmit(form :NgForm) {
          console.log(form);
          this.taskArray.push({
            taskName:form.controls['task'].value,
            isCompleted: false
          })
          form.reset(); //pour vider le input
        }
        //on recupere l'index du task du tableau
        onDelete(index: number){
            console.log(index);
            this.taskArray.splice(index, 1);//supp a l'indice 1 seule fois
        }
        onCheck(index : number){
          
          console.log(this.taskArray);
          this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted ;
        }
}
