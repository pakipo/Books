import { IBook,styleBook } from '../index'

export class Book implements IBook {
  id: string;
  title: string;
  pageCount: number;
  style: styleBook;
  img: string | null;
  shortDescription: string;
  autorId: string;
  releaseDate: Date;
  views!: number;
  liked!: string[];

  constructor(
    title: string,
    pageCount: number,
    style: styleBook,
    shortDescription: string,
    img: string,
    autorId: string,
    releaseDate: Date,
    id: string,
    views: number | null,
    liked: Array<string> | null
      ) {
    this.title = title;
    this.pageCount = pageCount;
    this.shortDescription = shortDescription;
    this.style = style;
    img ? this.img = img : this.img = null;
    console.log(releaseDate)
    this.releaseDate = releaseDate;
    this.autorId = autorId;
    this.id = id
    views ? this.views = views : this.views = 0;
    liked ? this.liked = liked : this.liked = [];
  }
}
