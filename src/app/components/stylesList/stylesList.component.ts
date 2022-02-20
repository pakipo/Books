import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {
  AutorService,
  UserService,
  BookService,
  styleBook,
  Book,
  userType,
  AuxiliaryService
} from '../../index';
import { Router } from '@angular/router';

@Component({
  selector: 'appStylesList',
  templateUrl: './stylesList.component.html',
  styleUrls: ['./stylesList.component.scss']
})
export class StylesListComponent implements OnInit {
  styles: any = styleBook
  styleBookKeys: Array<string> = Object.keys(styleBook)

  constructor(
    private router: Router,
    private bookService: BookService,
    private userService: UserService,
    private auxiliary: AuxiliaryService
  ) { }
  userType: userType = this.userService.userType
  bookArr: Array<
    {
      id: string,
      book: Array<Book>
    }
  > = []


  ngOnInit(): void {
    this.auxiliary.preloaderCtrl(true)
    this.userService.userTypSubj.subscribe(res => {
      this.userType = res as userType
    })
    Object.keys(this.styles).map((key, index) => {
      this.bookService.styleBooksInit(this.styles[key]).subscribe(res => {
        let arr = res as Book[]
        this.bookArr.push({
          id: this.styles[key],
          book: arr
        })
        if (index === Object.keys(this.styles).length - 1) { this.auxiliary.preloaderCtrl(false) }
      })
    })
  }
  goToStyle(style: string) {
    this.router.navigate(['stilesAutorsBooks', style])
  }
}



