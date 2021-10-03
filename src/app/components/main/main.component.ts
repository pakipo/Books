import { Component, OnInit,} from '@angular/core';
import {UserService, BookService, User, Book, userType} from '../../index';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userType: userType = this.userservice.userType;
  allBooks!: Array<Book>;
  book!: Book;
  img: string = "../assets/img/imgBooks/"

  constructor(private userservice: UserService,
              private bookservis: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.userservice.userTypSubj.subscribe(res => {
      this.userType = res as userType })
    this.bookservis.getAllBooks().subscribe(res => {
      this.allBooks = res as Array<Book>;
    })
  }

  liked(e: Event, book: Book) {
    this.bookservis.liked(e, book);
  }

  likedClass(book: Book) {
    let id = this.userservice.getUser()?.favoriteBooks.find(item => item === book.id)
    return id ? 'liked' : ''
  }

  goToBook(id: string) {
    this.router.navigate(['book',id])
  }
}
