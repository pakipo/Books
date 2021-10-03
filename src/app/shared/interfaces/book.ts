import { from } from "rxjs";
import { styleBook } from '../../index'

export interface IBook {
  id?: number,
  title: string,
  pageCount: number,
  style: styleBook,
  img: string | null,
  shortDescription: string,
  autorId: number,
  releaseDate: Date,
  views: number,
  liked: string[]
}
