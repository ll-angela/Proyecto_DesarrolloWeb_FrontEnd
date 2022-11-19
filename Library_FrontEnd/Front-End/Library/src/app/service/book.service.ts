import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book} from "../books/book";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

  searchAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:8082/book/booklist");
  }

  createBook(name: string, description: string, image_url: string, editorial_id: number, edit_date: string, amount: number): Observable<Book> {
    /*let token = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    const requestOptions = { headers: headers};*/
    const book = {"name": name, "description": description, "image_url": image_url, "editorial_id": editorial_id, "edit_date": edit_date, "amount": amount};
    return this.http.post<Book>("http://localhost:8082/book/createbook", book/*, requestOptions*/);
  }

  updateBook(id: number, name: string, description: string, image_url: string, editorial_id: number, edit_date: string, amount: number): Observable<Book> {
    let token = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    const requestOptions = { headers: headers};
    const book = {"id": id, "name": name, "description": description, "image_url": image_url, "editorial_id": editorial_id, "edit_date": edit_date, "amount": amount};
    return this.http.put<Book>("http://localhost:8082/book/updatebook", book, requestOptions);
  }

  deleteBook(id: number, name: string, description: string, image_url: string, editorial_id: number, edit_date: string, amount: number): Observable<Book> {
    let token = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    const requestOptions = { headers: headers};
    const book = {"id": id, "name": name, "description": description, "image_url": image_url, "editorial_id": editorial_id, "edit_date": edit_date, "amount": amount};
    return this.http.delete<Book>("http://localhost:8082/book/deletebook/"+book.id, requestOptions);
  }

  searchBooksByName(name: String): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:8082/book/bookname/{bookName}");
  }
}
