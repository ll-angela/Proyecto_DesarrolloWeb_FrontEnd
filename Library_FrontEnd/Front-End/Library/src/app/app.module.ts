import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { EditorialComponent } from './editorial/editorial.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FooterComponent } from './footer/footer.component';
import {TokenInterceptor} from "./login/TokenInterceptor";
import { BookAdminComponent } from './book-admin/book-admin.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ModifyBookComponent } from './modify-book/modify-book.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { InactivateUserComponent } from './inactivate-user/inactivate-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    BooksComponent,
    EditorialComponent,
    BookDetailsComponent,
    FooterComponent,
    BookAdminComponent,
    UserAdminComponent,
    CreateBookComponent,
    DeleteBookComponent,
    ModifyBookComponent,
    UserComponent,
    CreateUserComponent,
    ModifyUserComponent,
    InactivateUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
