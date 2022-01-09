import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AutorService, Autor, styleBook, Book, userType, ApiRequestService } from '../../index';
import { HttpClient } from '@angular/common/http';
import { User } from '../../classes/User';
import { map } from 'rxjs/operators';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: User | null;
  userType: userType = userType.admin;//заменить на гость!!!!!!
  userTypSubj = new Subject();
  constructor(private http: HttpClient,
    private api: ApiRequestService) { }

  // проверка имени и пароля при авторизации
  userNamePassCheck(form: FormGroup): Observable<any> {
    return this.api.getUsers().pipe(
      map(res => {
        let userArr: Array<User>;
        userArr = res as Array<User>;
        let user = userArr.find((user) => user.userName === form.get('userName')?.value);
        if (!user) {
          return null
        } else {
          return user.password === form.get('password')?.value  ? user : null
        }
      })
     )}
  
  // admin,user,guest
  shiftUserType(type: userType) {
    this.userType = type;
    this.userTypSubj.next(this.userType);
  }


  setUser(user: User | null) {
    this.user = user;
  }

  updateUser(user: User) {
    if (user) {
      this.api.updateUser(user).subscribe(res => {
        let user:User = res as User   
      })
    }
  }

  getUser(): User | null {
    return this.user;
  }

  getUsers() {
    return this.api.getUsers();
  }

  createUser(user: User): void {
    this.getUsers().subscribe(res => {
      let users = res as Array<User>;
      user.id = `${users.length}`;

      this.api.createUser(user).subscribe(res => {
        let user = res as User;
        this.setUser(user);
        this.shiftUserType(userType.user)
      }
        );
    })
  }

  formTouched(form: FormGroup): void {
    for (let control in form.controls) {
      form.controls[control].markAsTouched();
    }
  }

  }





 

