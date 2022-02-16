import { Component, OnInit, } from '@angular/core';
import { UserService, BookService, User, Book, userType, AuxiliaryService } from '../../index';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userType: userType = this.userservice.userType;
  allBooks: Array<Book>=[];
  book!: Book;
  img: string = "../assets/img/imgBooks/";

  constructor(private userservice: UserService,
              private bookservis: BookService,
    private router: Router,
    private auxiliary: AuxiliaryService) { }

  ngOnInit(): void {
   
    this.auxiliary.preloaderCtrl(true);
    this.userservice.userTypSubj.subscribe(res => {
      this.userType = res as userType })
   this.booksArrInt();
  }

  liked(e: Event, book: Book) {
    this.bookservis.liked(e, book);
  }

 
  goToBook(id: string) {
    this.allBooks = [];
    this.router.navigate(['book',id])
  }
  booksArrInt() {
    this.bookservis.getAllBooks().subscribe(res => {
      this.allBooks = res as Array<Book>;
      this.auxiliary.preloaderCtrl(false);
    })
  }
}
