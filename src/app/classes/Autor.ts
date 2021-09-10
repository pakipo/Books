import { IAutor, IBook } from '../index';

export class Autor implements IAutor {
  id?: number;
  surname: string;
  name: string;
  patronymic?: string;
  birthDate: Date;
  briefBiography: string;
  dooksId: number[];
  views: number = 0;
  liked: string[]=[]

  constructor(surname: string, name: string, birthDate: Date, briefBiography: string, dooksId: number[], id?: number, patronymic?: string,) {
    this.id = id,
    this.surname = surname;
    this.name=name
    this.patronymic=patronymic
    this.birthDate=birthDate
    this. briefBiography=briefBiography
    this.dooksId = dooksId
  }
}
