import { Component, OnInit } from '@angular/core';
import {Book} from "../books/book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  /*book: Book | undefined;
  books: Book[] = [];*/

  constructor(/*private route: ActivatedRoute*/) { }

  ngOnInit(): void {
    /*const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('bookId'));

    this.book = this.books.find(book => book.id === bookIdFromRoute);*/
  }

}
