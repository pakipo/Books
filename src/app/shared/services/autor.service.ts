import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Autor, Book, styleBook, IAutor, IUser,User } from '../../index';
//import { IAutor,IUser } from '../interfaces/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) {}
   
  

 
}
