import { IBook,styleBook } from '../index'

export class Book implements IBook {
  id: number;
  title: string;
  pageCount: number;
  style: styleBook;
  img: string | null;
  shortDescription: string;
  autorId: number;
  releaseDate: Date;
  views!: number;
  liked!: string[];

  constructor(
    title: string,
    pageCount: number,
    style: styleBook,
    shortDescription: string,
    img: string,
    autorId: number,
    releaseDate: Date,
    id: number,
    views: number | null,
    liked: Array<string> | null
      ) {
    this.title = title;
    this.pageCount = pageCount;
    this.shortDescription = shortDescription;
    this.style = style;
    img ? this.img = img : this.img = null;
    this.releaseDate = releaseDate;
    this.autorId = autorId;
    this.id = id
    views ? this.views = views : this.views = 0;
    liked ? this.liked = liked : this.liked = [];
  }
}
