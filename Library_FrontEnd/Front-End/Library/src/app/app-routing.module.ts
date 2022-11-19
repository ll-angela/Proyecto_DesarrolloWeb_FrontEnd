import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component' //Queremos que nos cargue de una la vista de los libros
import { LoginComponent } from './login/login.component'
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookAdminComponent} from "./book-admin/book-admin.component";
import {UserAdminComponent} from "./user-admin/user-admin.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {ModifyBookComponent} from "./modify-book/modify-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {ModifyUserComponent} from "./modify-user/modify-user.component";
import {InactivateUserComponent} from "./inactivate-user/inactivate-user.component";

const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'login', component: LoginComponent},
  { path: 'bookdetails', component: BookDetailsComponent},
  { path: 'bookadmin', component: BookAdminComponent},
  { path: 'useradmin', component: UserAdminComponent},
  { path: 'createbook', component: CreateBookComponent},
  { path: 'updatebook', component: ModifyBookComponent},
  { path: 'deletebook', component: DeleteBookComponent},
  { path: 'createuser', component: CreateUserComponent},
  { path: 'updateuser', component: ModifyUserComponent},
  { path: 'inactivate', component: InactivateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
