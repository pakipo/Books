import { Injectable } from '@angular/core';
import { map, concatMap } from 'rxjs/operators';
import { ApiRequestService, UserService, Book, Month, User, styleBook } from '../../index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private api: ApiRequestService,
    private userservice: UserService
  ) { }

  getAllBooks() {
    return this.api.getBooks();  
  }

  getBook(id: number) {
   return this.api.getBook(id)
  }

  updateBook(book: Book) {
   return this.api.updateBook(book)
  }

  formatDate(date: Date) {
    let dd;
    let mm;
    let yy;
    date.getDate() < 10 ? dd = '0' + date.getDate() : dd = '' + date.getDate();
    mm = Month[date.getMonth()]
    yy = date.getFullYear();
    return `${dd} ${mm} ${yy} г.`
  }

  liked(e: Event, book: Book) {
    e.stopPropagation();
    let user: User | null = this.userservice.getUser();
    let idIndex!: number;
    let liked = user?.favoriteBooks?.find((item, index) => {
      idIndex = index;
      return item === book.id
    })

    if (liked) {
      user?.favoriteBooks.splice(idIndex, 1);
      book.liked.find((item, index) => {
        idIndex = index;
        return item === user?.id;
      });
      book.liked.splice(idIndex, 1)

    } else {
      user?.favoriteBooks.push(book.id);
      user?.id ? book.liked.push(user.id) : null
    }

    this.userservice.setUser(user)
    user ? this.userservice.updateUser(user) : null;
    this.updateBook(book)
  }

  // Вернуть массив книг автора
  autorBooksInit(books: Array<number>) {
    let autorBooks: Book[] = [];
    let book;
    
    if (books.length < 6) {
      books.map((id) => {
        this.getBook(id).subscribe(res => {
          book = res as Book;
          autorBooks.push(book);
        })
      })
    }
    else {
      for (let i = 0; i < 6; i++) {
        this.getBook(books[i]).subscribe(res => {
          book = res as Book
         autorBooks.push(book)
        })
      }
    }

    return new Observable((s) => { s.next(autorBooks) })
  }
  // Вернуть массив книг в данном жанре
  styleBooksInit(style: styleBook, bookId: number) {
    let styleBooks: Book[] = [];

  return  this.getAllBooks().pipe(
      map( res => {
      let arr = res as Array<Book>;
      let arrStyle: Array<Book> = [];
      arr.map(book => {
        book.style === style && book.id !== bookId ? arrStyle.push(book) : null;
      })
     
      if (arrStyle.length < 7) {
        styleBooks = arrStyle
      } else {
        for (let i = 0; i < 7; i++) {
          styleBooks.push(arrStyle[i]);
       }
        }
        return styleBooks;
    }) )
  }

  deleteBook(id: number) {
    return this.api.deleteBook(id)
  }
}
