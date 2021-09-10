import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnChanges, Input } from '@angular/core';
import { AutorService, UserService, BookService, Autor, styleBook, User, Book, userType } from '../../index';
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
    e.stopPropagation();
    let user: User | null = this.userservice.getUser();
    let idIndex!:number;
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
    this.bookservis.updateBook(book)

    console.log(book)
  }

  likedClass(book: Book) {
    let id = this.userservice.getUser()?.favoriteBooks.find(item => item === book.id)
   return id  ? 'liked':''
  }

  goToBook(id: string) {
    this.router.navigate(['book',id])
  }
}
