import { Component, OnInit } from '@angular/core';
import { BookService } from "../service/book.service";
import { Book } from "../books/book";

@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: Book[] = [];

  ngOnInit(): void {
    this.getBooks();
  }


  getBooks(): void {
    this.bookService.searchAllBooks().subscribe(
      data => this.books = data
    );
  }

}
