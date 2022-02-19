import { IBook,styleBook } from '../index'

export class Book implements IBook {
  id: number;
  title: string;
  pageCount: number;
  style: styleBook;
  img: string | null;
  autorId: number;
  releaseDate: Date | string;
  views!: number;
  liked!: string[];
  pdfLink: string = '';
 
  constructor(
    title: string,
    pageCount: number,
    style: styleBook,
    img: string,
    autorId: number,
    releaseDate: Date | string,
    id: number,
    views: number | null,
    liked: Array<string> | null,
    pdfLink: string
   
      ) {
    this.title = title;
    this.pageCount = pageCount;
    this.style = style;
    img ? this.img = img : this.img = null;
    this.releaseDate = releaseDate;
    this.autorId = autorId;
    this.id = id
    views ? this.views = views : this.views = 0;
    liked ? this.liked = liked : this.liked = [];
    pdfLink ? this.pdfLink = pdfLink : ''
   
  }
}
