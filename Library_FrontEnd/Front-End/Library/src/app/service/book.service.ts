import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book} from "../books/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  searchAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:8082/book/booklist");
  }

  /*searchBooksByName(name: String): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:8082/book/bookname/{bookName}");
  }*/
}
