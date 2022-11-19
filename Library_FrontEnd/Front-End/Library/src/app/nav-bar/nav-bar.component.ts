import { Component, OnInit } from '@angular/core';
import { LoginService } from "../service/login.service";
import { NgForm } from '@angular/forms';
import { BookService } from "../service/book.service";
import { Book } from "../books/book";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loged: boolean = false;

  constructor(private loginService: LoginService,
              private bookService: BookService) { }

  books: Book[] = [];

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.loginService.getToken().length > 0) {
      this.loged = true;
    } else {
      this.loged = false;
    }
  }

  search(searchForm: NgForm) {
    this.bookService.searchBooksByName(searchForm.value.filter);
  }

  logout(): void {
    this.loginService.logout();
  }

}
