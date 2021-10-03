import { IAutor, IBook, city, country } from '../index';

export class Autor implements IAutor {
  id?: number;
  surname: string;
  name: string;
  patronymic?: string;
  birthDate: Date;
  dateDeath?: Date;
  briefBiography: string;
  dooksId: number[];
  views: number = 0;
  liked: string[] = [];
  photo: string;
  country: string;
  city: string;
  link: string;

  constructor(
    surname: string,
    name: string,
    birthDate: Date,
    briefBiography: string,
    dooksId: number[],
    photo: string,
    country: string,
    city: string,
    link: string,
    id?: number,
    patronymic?: string,
    dateDeath?: Date) {

    this.id = id;
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.birthDate = birthDate;
    this.dateDeath = dateDeath;
    this.briefBiography = briefBiography;
    this.country = country;
    this.city = city;
    this.dooksId = dooksId;
    this.photo = photo;
    this.link = link;
  }
}
