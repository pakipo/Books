import { Component, OnInit, ViewChild, ElementRef,Renderer2} from '@angular/core';
import { AutorService, UserService, BookService, Autor, styleBook, Book, userType } from '../../index';
import { ActivatedRoute, Router } from '@angular/router';
import { map, concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  imgPath: string = "../assets/img/imgAutor/";
  userType!: userType;
  autorId!: number;
  autor!: Autor;
  autorBooks: Array<Book> = [];
  birthDate!: string;
  dateDeath?: string;
  biography!: string;
  biographyMain!: string;
  



  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private userService: UserService,
    private render: Renderer2
  ) { }
  @ViewChild("biographyContent") biographyBlock!: ElementRef<HTMLElement>;

  ngOnInit(): void {

    this.userService.userTypSubj.subscribe(res => {
      this.userType = res as userType});
    
    this.route.params.subscribe(par => {
      this.autorId = par.id;});
       

    this.autorService.getAutor(this.autorId).subscribe(
      aut => {
        this.autor = aut as Autor;
        this.biography = this.autor.briefBiography.slice(0, 150);
        this.biographyMain = this.autor.briefBiography.slice(151);
        this.birthDate = this.bookService.formatDate(new Date(this.autor.birthDate))
        this.dateDeath = this.autor.dateDeath ? this.bookService.formatDate(new Date(this.autor.dateDeath)) : '';
        this.autorBooksInit(this.autor.dooksId);
      });
      
  }
  autorBooksInit(books: Array<number>) {
    let book: Book;
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
  biographyDisplayed() {
    let dot = this.biographyBlock.nativeElement.querySelector('.dot');
    let main = this.biographyBlock.nativeElement.querySelector('.mainText');
    let btn = this.biographyBlock.nativeElement.querySelector('button');
    if (btn!.innerText === 'Читать полностью') {
      this.render.setStyle(dot, 'display', 'none');
      this.render.setStyle(main, 'display', 'inline');
      this.render.setProperty(btn, 'textContent', 'Скрыть');
    } else {
      this.render.setStyle(dot, 'display', 'inline');
      this.render.setStyle(main, 'display', 'none');
      this.render.setProperty(btn, 'textContent', 'Читать полностью');
    }
  }
}
