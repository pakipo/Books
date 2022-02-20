import { Component, OnInit,Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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

export class SectionComponent implements OnInit{

  slideConfig = {

    "prevArrow": "<img class='slick-prev'  src='../../../../assets/img/nav/left-arrow.svg'>",
    "nextArrow": "<img class='slick-next' src='../../../../assets/img/nav/right-arrow.svg'>",
    "responsive": [{

      breakpoint: 751,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }   },
  {
      breakpoint:400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    
    }]
     
  };

  constructor(
    private render: Renderer2
  ) { }
  @ViewChild('mainEl') container!: ElementRef<HTMLDivElement>;

  @Input('sectionTitle') sectionTitle!: string;
  @Input('bookArr') bookArr!: Array<Book>;
  @Input('userType') userType!: userType;
 

  ngOnInit(): void {
  
  }
   
 
 
}
