import { Injectable } from '@angular/core';

import { ApiRequestService, Book } from '../../index';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private api: ApiRequestService) { }

  getAllBooks() {
    return this.api.getBooks();  
  }

  getBook(id: string) {
   return this.api.getBook(id)
  }

  updateBook(book: Book) {
   return this.api.updateBook(book)
  }
}
