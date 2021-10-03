import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Autor, Book, styleBook, IAutor, IUser, User, ApiRequestService } from '../../index';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private api: ApiRequestService) {}

  getAutor(id: number){
    return this.api.getAutor(id)
  }
  

 
}
