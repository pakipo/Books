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
  autorBooks!: Array<Book>;
  birthDate!: string;
  dateDeath?: string;
  biography!: string;
  biographyMain!: string;
  load: boolean = true;
  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private userService: UserService,
    private render: Renderer2,
    private auxiliary: AuxiliaryService
  ) { }
  @ViewChild("biographyContent") biographyBlock!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.load = false;
    this.auxiliary.preloaderCtrl(true);
    this.userService.userTypSubj.subscribe(res => {
      this.userType = res as userType
    });

    this.route.params.pipe(
      map(par => {

        this.autorId = par.id;
      }),

      concatMap(() => { return this.autorService.getAutor(this.autorId) }),

      concatMap((aut) => {
        this.autor = aut as Autor;
        this.biography = this.autor.briefBiography.slice(0, 150);
        this.biographyMain = this.autor.briefBiography.slice(151);
        this.birthDate = this.bookService.formatDate(new Date(this.autor.birthDate))
        this.dateDeath = this.autor.dateDeath ? this.bookService.formatDate(new Date(this.autor.dateDeath)) : '';
        return this.bookService.autorBooksInit(this.autor.dooksId)
      })).subscribe(books => {
        this.autorBooks = books as Array<Book>;
        this.load = true;
        this.auxiliary.preloaderCtrl(false)
    
      })
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
