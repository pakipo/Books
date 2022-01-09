import { Component, ElementRef, OnInit, Renderer2,ViewChild  } from '@angular/core';
import {
  AutorService,
  UserService,
  BookService,
  AuxiliaryService,
  Autor,
  styleBook,
  Book,
  userType,} from '../../index';


import { ActivatedRoute, Router } from '@angular/router';
import { map, concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{
  load: boolean = true;
  userType: userType = this.userservice.userType;
  booksLoad: boolean = false;
  date!: string;
  book!: Book;
  bookId!: number;
  autor!: Autor;
  autorBooks: Array<Book> = [];
  styleBooks: Array<Book> = [];
  pdfLink!: HTMLLinkElement;
  imgPath: string = "../assets/img/imgBooks/"
  pdfPath: string = "../assets/bookPdf/"
  constructor(
    private userservice: UserService,
    private bookService: BookService,
    private autorServis: AutorService,
    private route: ActivatedRoute,
    private router: Router,
    private auxiliary: AuxiliaryService,
    private renderer: Renderer2
  ) { }

  @ViewChild('btnDownload') _btn!: ElementRef<HTMLButtonElement>;

  ngOnInit(): void {
   

    this.userservice.userTypSubj.subscribe(res => {
      this.userType = res as userType
    })
    this.route.params.subscribe(par => {
      this.bookId = par.id;
      this.getCurBook()
    });
  }
 

 
  getCurBook() {
    this.autorBooks = [];
    this.styleBooks = [];
    this.load = false;
    this.auxiliary.preloaderCtrl(true);
    
    this.bookService.getBook(this.bookId).pipe(
      //отображаемая книга
      map(book => {
      this.book = book as Book;
        this.date = this.bookService.formatDate(new Date(this.book.releaseDate));
        this.pdfLink = this.renderer.createElement('a');
        this.renderer.setAttribute(this.pdfLink, 'href', this.pdfPath + this.book.pdfLink);
        this.renderer.setAttribute(this.pdfLink, 'download', this.book.pdfLink)
      }),

      concatMap(() => { return this.autorServis.getAutor(this.book.autorId) }),
      //автор
      concatMap((res) => {
        this.autor = res as Autor;
        let booksId: Array<number> = this.autor.dooksId;
        booksId.splice(booksId.indexOf(this.book!.id), 1);
        return this.bookService.autorBooksInit(booksId)
      }),
      //массив книг автора
      concatMap((res) => {
        this.autorBooks = res as Array<Book>;
        return this.bookService.styleBooksInit(this.book.style, this.book.id)
      })
      //массив книг одного стиля
    ).subscribe((res) => {
      this.styleBooks = res as Array<Book>;
      this.load = true;
      this.auxiliary.preloaderCtrl(false);
    })
  }

  //скачать книгу
  downloadBook() {
    this.book.pdfLink ? this.pdfLink.click() : null;
  }

  goToReader() {
    this.router.navigate(['reader', this.book.pdfLink])
  }
}
