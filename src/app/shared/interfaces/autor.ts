import {IBook,city,country} from '../../index'
export interface IAutor {

  id?: number;
  surname: string;
  name: string;
  patronymic?: string;
  birthDate: Date;
  dateDeath?: Date;
  briefBiography: string;
  dooksId: number[];
  views: number;
  liked: string[];
  photo: string;
  country: string;
  city: string;
  link: string;
}
