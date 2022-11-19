import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { BookService } from "../service/book.service";
import { Book } from "../books/book";
import { Editorial } from "../editorial/editorial";
import { EditorialService } from "../service/editorial.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-book',
  templateUrl: './modify-book.component.html',
  styleUrls: ['./modify-book.component.css']
})
export class ModifyBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private editorialService: EditorialService,
              private router: Router) { }

  book: Book =
    {
      "id": 0,
      "name": '',
      "description": '',
      "image_url": '',
      "editorial_id": 0,
      "edit_date": '',
      "amount": 0
    };

  modifyForm = this.formBuilder.group({
    id: 0,
    name: '',
    description: '',
    image_url: '',
    editorial_id: 0,
    edit_date: '',
    amount: 0

  });

  editorials: Editorial[] = [];
  books: Book[] = [];

  ngOnInit(): void {
    this.getEditorials();
    this.getBooks();
  }

  onSubmit(): void {
    let idParam: number;
    let nameParam: string;
    let descriptionParam: string;
    let imageParam: string;
    let editorialParam: number;
    let editDateParam: string;
    let amountParam: number;
    idParam = <number>this.modifyForm.value.id;
    nameParam = ''+this.modifyForm.value.name;
    descriptionParam = ''+this.modifyForm.value.description;
    imageParam = ''+this.modifyForm.value.image_url;
    editorialParam = <number>this.modifyForm.value.editorial_id;
    editDateParam = ''+this.modifyForm.value.edit_date;
    amountParam = <number>this.modifyForm.value.amount;

    this.bookService.updateBook(idParam, nameParam, descriptionParam, imageParam, editorialParam, editDateParam, amountParam).subscribe(
      data => {
        this.book = data;
        this.router.navigateByUrl('/bookadmin');
      }
    );
    this.modifyForm.reset();
  }

  getEditorials(): void {
    this.editorialService.searchAllEditorials().subscribe(
      data => this.editorials = data
    );
  }

  getBooks(): void {
    this.bookService.searchAllBooks().subscribe(
      data => this.books = data
    );
  }


}
