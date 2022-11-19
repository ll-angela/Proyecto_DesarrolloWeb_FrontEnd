import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { BookService } from "../service/book.service";
import { Book } from "../books/book";
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  books: Book[] = [];

  deleteForm = this.formBuilder.group({
    book: ''
  });

  ngOnInit(): void {
    this.getBooks();
  }

  onSubmit() {
    let bookParam: Book;
    let book = this.books.find(element => element.name == this.deleteForm.value.book);
    bookParam = {"id": book!.id, "name": book!.name, "description": book!.description, "image_url": book!.image_url, "editorial_id": book!.editorial_id, "edit_date": book!.edit_date, "amount": book!.amount};
    if (confirm("¿Está seguro que quiere eliminar " + book!.name + "?")) {
      this.bookService.deleteBook(bookParam.id, bookParam.name, bookParam.description, bookParam.image_url, bookParam.editorial_id, bookParam.edit_date, bookParam.amount).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/bookadmin');
        }
      );
    }
  }

  getBooks(): void {
    this.bookService.searchAllBooks().subscribe(
      data => this.books = data
    );
  }

}
