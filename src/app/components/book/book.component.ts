import { Component, OnInit } from '@angular/core';
import { AutorService, UserService, BookService, Autor, styleBook, User, Book, userType } from '../../index';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book!: Book;
  img: string = "../assets/img/imgBooks/"
  constructor(private bookService: BookService,
    private userService: UserService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookService.getBook(this.router.snapshot.params.id).subscribe(book => {
      this.book = book as Book
      console.log(typeof this.book.releaseDate)
    })
   
  }

}
