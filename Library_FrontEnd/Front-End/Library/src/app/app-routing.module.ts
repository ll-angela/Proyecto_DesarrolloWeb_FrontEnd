import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component' //Queremos que nos cargue de una la vista de los libros
import { LoginComponent } from './login/login.component'
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'login', component: LoginComponent},
  { path: 'bookdetails', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
