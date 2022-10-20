import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Editorial } from "../editorial/editorial";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(private http: HttpClient) { }

  searchAllEditorials(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>("http://localhost:8083/editorial/editoriallist")
  }
}
