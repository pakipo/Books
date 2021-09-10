
import {IUser} from "../index"

export class User implements IUser{
  id: string | null;
  userName: string
  password: string
 phone:Array<string>;
  email: string;
  vieweBooks: Array<string>;
  favoriteBooks: Array<string>;
  constructor(name: string, password: string, email: string, id: string | null, phone: Array<string> | null, favoriteBooks: Array<string> | null, vieweBooks: Array<string> | null) {
    id ? this.id = id : this.id = null;
    this.password = password;
    this.userName = name;
    this.email = email;
    phone ? this.phone = phone : this.phone = [];
      favoriteBooks ? this.favoriteBooks = favoriteBooks : this.favoriteBooks = [];
      vieweBooks ? this.vieweBooks = vieweBooks : this.vieweBooks = [];
  }
}
