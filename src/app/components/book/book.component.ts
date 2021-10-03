import { Component, OnInit } from '@angular/core';
import { AutorService, UserService, BookService, Autor, styleBook,Book, userType} from '../../index';
import { ActivatedRoute, Router } from '@angular/router';
import { map, concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{
  userType!: userType;
  date!: string;
  book!: Book;
  bookId!: number;
  autor!: Autor;
  autorBooks: Array<Book> = [];
  styleBooks: Array<Book> = [];
  imgPath: string = "../assets/img/imgBooks/"
  constructor(
    private userservice: UserService,
    private bookService: BookService,
    private autorServis: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(par => { this.bookId = par.id; this.getCurBook() });
        this.userservice.userTypSubj.subscribe(res => {
        this.userType = res as userType})

  }
 
  getCurBook() {
    this.autorBooks = [];
    this.styleBooks = [];
    this.bookService.getBook(this.bookId).pipe(
      map(book => { this.book = book as Book;
      this.date = this.bookService.formatDate(new Date(this.book.releaseDate));
      this.styleBooksInit(this.book!.style);
      }),
      concatMap(res => this.autorServis.getAutor(this.book.autorId))
    ).subscribe(res => {
      this.autor = res as Autor;
      this.autorBooksInit(this.autor.dooksId);
    })
  }

  autorBooksInit(books:Array<number>) {
       books.splice(books.indexOf(this.book!.id), 1);
       let book;
        if (books.length < 7) {
      books.map((id) => {
        this.bookService.getBook(id).subscribe(res => {
          book = res as Book;
          this.autorBooks.push(book);
        })
      })
    }
    else {
      for (let i = 0; i < 7; i++) {
        this.bookService.getBook(books[i]).subscribe(res => {
          book = res as Book
          this.autorBooks.push(book)
        })
      }
    }
  }

  styleBooksInit(style: styleBook) {
    this.bookService.getAllBooks().subscribe(res => {
      let arr = res as Array<Book>;
      let arrStyle: Array<Book> = [];
      arr.map(book => {
        book.style === style && book.id !== this.book!.id ? arrStyle.push(book) : null;
        })
      if (arrStyle.length < 7) {
        this.styleBooks = arrStyle
      } else {
        for (let i = 0; i < 7; i++) {
          this.styleBooks.push(arrStyle[i]);
        }
      }
    })
  }

  goToAutor() {
    this.router.navigate(['autor', this.autor.id])
  }
}
