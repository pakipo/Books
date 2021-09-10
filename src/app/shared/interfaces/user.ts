export interface IUser {
  id: string | null;
  userName: string;
  password: string;
  phone: Array<string>;
  email: string;
  vieweBooks: Array<string> | [];
  favoriteBooks: Array<string> | [];
}
