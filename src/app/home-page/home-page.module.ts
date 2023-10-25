import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { FunThingComponent } from './fun-thing/fun-thing.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [IntroductionComponent, FunThingComponent, TodoListComponent],
  imports: [CommonModule],
  exports: [FunThingComponent, IntroductionComponent, TodoListComponent],
})
export class HomePageModule {}
