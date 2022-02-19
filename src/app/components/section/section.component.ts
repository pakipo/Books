import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {
  UserService,
  BookService,
  AuxiliaryService,
  Book,
  userType,
  ModalWinComponent
} from '../../index';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit, AfterViewInit {

  slideConfig = {

    "prevArrow": "<img class='slick-prev'  src='../../../../assets/img/nav/left-arrow.svg'>",
    "nextArrow": "<img class='slick-next' src='../../../../assets/img/nav/right-arrow.svg'>",
    "responsive": [{

      breakpoint: 751,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      
      } } ]
     
  };

  constructor(
    private render: Renderer2
  ) { }
  @ViewChild('mainEl') container!: ElementRef<HTMLDivElement>;

  @Input('sectionTitle') sectionTitle!: string;
  @Input('bookArr') bookArr!: Array<Book>;
  @Input('userType') userType!: userType;
  @Input('autorBookArr') autorBookArr?: number;

  ngOnInit(): void {
 
  }
   
 
  ngAfterViewInit() {
    let renderer = () => {
      let carousel = this.container.nativeElement.querySelector('.contentMobile')
      let content = this.container.nativeElement.querySelector('.content')
      this.render.setAttribute(carousel, 'style', 'display:none')
      this.render.setAttribute(content, 'style', "display:block;")
    }

    if (this.autorBookArr && this.autorBookArr < 3 && document.documentElement.clientWidth < 750) {
      renderer()
    } else if ( !this.autorBookArr && this.bookArr.length < 3 && document.documentElement.clientWidth < 750) { renderer()}
  }
}
