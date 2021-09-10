import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Autor, Book, styleBook, IAutor, IUser, User, apiEndPoints } from '../../index';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }


  getAutors() {
    return this.http.get(apiEndPoints.autor)
  }


  getAutor(id: number) {
    return this.http.get(apiEndPoints.autor + `/${id}`);
  }


   createAutor(aut: Autor) {
     return this.http.post(apiEndPoints.autor, aut)
  }

  getUsers() {
    return this.http.get(apiEndPoints.user)
  }

  getUser(id: number) {
    return this.http.get(apiEndPoints.user + `/${id}`)
  }

  createUser(user: User) {

    return this.http.post(apiEndPoints.user, user)
  }
  updateUser(user: User) {
    return this.http.put(apiEndPoints.user,user)
  }

 
  getBooks() {
    return this.http.get(apiEndPoints.book)
  }

  getBook(id: string) {
    console.log('!!')
    return this.http.get(apiEndPoints.book + `/${id}`)
  }

  createBook(book: Book) {
    return this.http.post(apiEndPoints.book, book)
  }
  updateBook(book: Book) {
    return this.http.put(apiEndPoints.book, book)
  }
}
