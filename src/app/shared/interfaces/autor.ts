import {IBook} from '../../index'
export interface IAutor {

  id?: number,
  surname: string,
  name: string,
  patronymic?: string,
  birthDate:Date ,
  briefBiography: string,
  dooksId: number[]
  views: number,
  liked: string[]
}
