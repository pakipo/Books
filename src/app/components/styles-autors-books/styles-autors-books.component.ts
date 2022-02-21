import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {
  AutorService,
  UserService,
  BookService,
  SectionComponent,
  Autor,
  styleBook,
  Book,
  userType,
  AuxiliaryService
} from '../../index';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-styles-autors-books',
  templateUrl: './styles-autors-books.component.html',
  styleUrls: ['./styles-autors-books.component.scss']
})
export class StylesAutorsBooksComponent implements OnInit {


  constructor(
    private autorService: AutorService,
    private router: Router,
    private bookService: BookService,
    private userService: UserService,
    private render: Renderer2,
    private auxiliary: AuxiliaryService,
    private route: ActivatedRoute
  ) { }
  title!: string;
  id?: number;
  bookArr!: Array<Book>
  userType: userType = this.userService.userType


  ngOnInit(): void {
    this.auxiliary.preloaderCtrl(true)
    this.userService.userTypSubj.subscribe(res => {
      this.userType = res as userType
    })

    this.title = this.route.snapshot.params.title
    this.id = this.route.snapshot.params.id
    if (!this.id) {
      this.bookService.getAllsyleBooks(this.title as styleBook).subscribe(res => {
        this.bookArr = res as Book[]
        setTimeout(() => { this.auxiliary.preloaderCtrl(false) }, 500)
      })
    } else {
      this.autorService.getAutor(this.id).pipe(map(res => {
        let autor = res as Autor
        return autor.dooksId
      }),
        concatMap((res) => {
          return this.bookService.getAllautorBooks(res as number[])
        })).subscribe(res => {
          this.bookArr = res as Book[]
          setTimeout(() => { this.auxiliary.preloaderCtrl(false) }, 500)
        })
    }

  }

}

