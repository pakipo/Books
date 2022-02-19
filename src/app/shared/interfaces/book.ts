import { from } from "rxjs";
import { styleBook } from '../../index'

export interface IBook {
  id?: number,
  title: string,
  pageCount: number,
  style: styleBook,
  img: string | null,
  autorId: number ,
  releaseDate: Date | string,
  views: number,
  liked: string[],
 
}
