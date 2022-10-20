import { Component, OnInit } from '@angular/core';
import { Book } from "./book";
import { BookService} from "../service/book.service";
import { EditorialService } from "../service/editorial.service";
import {Editorial} from "../editorial/editorial";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  editorials: Editorial[] = [];

  constructor(private bookService: BookService,
              private editorialService: EditorialService) { }

  ngOnInit(): void {

    this.bookService.searchAllBooks().subscribe(
      (dataBooks: Book[]) => {
        console.log(dataBooks);
        this.books = dataBooks;
      });

    this.editorialService.searchAllEditorials().subscribe(
      (dataEditorials: Editorial[]) => {
        console.log(dataEditorials);
        this.editorials = dataEditorials;
      });
  }

  getEditorial(id: number): string {
    for(let editorial of this.editorials) {
      if(editorial.id === id) {
        return editorial.name;
      }
    }
    return "Editorial";
  }

  searchBookByEditorial(book: Book): Book[] {
    return this.books;
  }

}
