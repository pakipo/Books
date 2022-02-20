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
import { Router } from '@angular/router';


@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.scss']
})
export class AutorListComponent implements OnInit {
  userType: userType = this.userService.userType
  autorsArr: Array<
    {
      id: number,
      surname: string,
      name: string,
      booksArr: Book[],
    }
  > = []
  constructor(
    private autorService: AutorService,
    private router: Router,
    private bookService: BookService,
    private userService: UserService,
    private render: Renderer2,
    private auxiliary: AuxiliaryService
  ) { }

  ngOnInit(): void {
    this.auxiliary.preloaderCtrl(true)

    this.userService.userTypSubj.subscribe(res => {
      this.userType = res as userType})
    
    this.autorService.getAutors().subscribe(res => {
      let autArr = res as Autor[]
      autArr.map((autor,index) => {
        this.bookService.autorBooksInit(autor.dooksId).subscribe(res => {
          let bookArr = res as Book[]
          this.autorsArr.push(
            {
              id: autor.id!,
              surname: autor.surname,
              name: autor.name,
              booksArr: bookArr,
              }
          )
          if (index === autArr.length - 1) { setTimeout(() => { this.auxiliary.preloaderCtrl(false)},500)  }
        })
      })
    })
  }

  goToAutor(id: number) {
    this.router.navigate(['autor', id])
  }

  goToAutorAllBooks(title: string, id: number) {
    this.router.navigate(['stilesAutorsBooks', title, { id:id }])
    }
  }

