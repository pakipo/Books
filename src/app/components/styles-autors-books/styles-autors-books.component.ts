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
  title!: string
  ngOnInit(): void {
    this.title = this.route.snapshot.params.title
  }

}

