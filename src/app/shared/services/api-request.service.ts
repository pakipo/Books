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
    console.log('ser')
    return this.http.get(apiEndPoints.autor)
  }


  getAutor(id: number) {
    return this.http.get(apiEndPoints.autor + `/${id}`);
  }


   createAutor(aut: Autor) {
     return this.http.post(apiEndPoints.autor, aut)
  }

  updateAutor(autor: Autor) {
    return this.http.put(apiEndPoints.autor, autor)
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

  getBook(id: number) {
      return this.http.get(apiEndPoints.book + `/${id}`)
  }

  createBook(book: Book) {
    return this.http.post(apiEndPoints.book, book)
  }
  updateBook(book: Book) {
    return this.http.put(apiEndPoints.book, book)
    }

    
  deleteBook(id: number) {
    return this.http.delete(apiEndPoints.book + `/${id}`)
  }
}
