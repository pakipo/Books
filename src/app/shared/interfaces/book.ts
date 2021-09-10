import { from } from "rxjs";
import { styleBook } from '../../index'

export interface IBook {
  id?: string,
  title: string,
  pageCount: number,
  style: styleBook,
  img: string | null,
  shortDescription: string,
  autorId: string,
  releaseDate: Date,
  views: number,
  liked: string[]
}
