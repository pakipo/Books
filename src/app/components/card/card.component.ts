import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, BookService, User, Book, userType, BookComponent } from '../../index';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  img: string = "../assets/img/imgBooks/";
  constructor(
    private userservice: UserService,
    private bookservis: BookService,
    private router: Router
  ) { }

  @Input('book') book!: Book;
  @Input('userType') userType!: userType;

  ngOnInit(): void {
  }

  liked(e: Event, book: Book) {
    this.bookservis.liked(e, book);
  }

  likedClass(book: Book) {
    let id = this.userservice.getUser()?.favoriteBooks.find(item => item === book.id)
    return id ? 'liked' : ''
  }
  goToBook(id: number) {
    this.router.navigate(['book', id]);
  }
}
