import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { BookService } from "../service/book.service";
import { Book } from "../books/book";
import { Editorial } from "../editorial/editorial";
import { EditorialService } from "../service/editorial.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

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

  createForm = this.formBuilder.group({
    name: '',
    description: '',
    image_url: '',
    editorial_id: 0,
    edit_date: '',
    amount: 0

  });

  editorials: Editorial[] = [];

  ngOnInit(): void {
    this.getEditorials();
  }

  onSubmit(): void {
    let nameParam: string;
    let descriptionParam: string;
    let imageParam: string;
    let editorialParam: number;
    let editDateParam: string;
    let amountParam: number;
    nameParam = ''+this.createForm.value.name;
    descriptionParam = ''+this.createForm.value.description;
    imageParam = ''+this.createForm.value.image_url;
    editorialParam = <number>this.createForm.value.editorial_id;
    editDateParam = ''+this.createForm.value.edit_date;
    amountParam = <number>this.createForm.value.amount;

    this.bookService.createBook(nameParam, descriptionParam, imageParam, editorialParam, editDateParam, amountParam).subscribe(
      data => {
        this.book = data;
      this.router.navigateByUrl('/bookadmin');
      }
    );
    this.createForm.reset();
  }

  getEditorials(): void {
    this.editorialService.searchAllEditorials().subscribe(
      data => this.editorials = data
    );
  }
}
