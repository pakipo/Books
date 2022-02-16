import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Autor, Book, User, IUser, styleBook, country, city } from '../../index'
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
    
 

  createDb(){
    let autors: Autor[] =
      [
        new Autor('Автор 1', 'Имя 1', new Date(1999, 0, 18), 'rrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegweg!',
          [0, 1, 2,4,5,6,7,], 'autor1.jpg', country[1], city[1], 'https://www.google.com/', 0,'', new Date(2000,1,18)),

        new Autor('Автор 2', 'Имя 2', new Date(1900,11,2), 'rrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegweg!',
          [3, 4, 5], 'autor2.jpg', country[2], city[2], 'https://www.google.com/', 1,'Отчество 2'),

        new Autor('Автор 3', 'Имя 3', new Date(1990,11,2), 'rrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegweg!',[6,7,8],
          'autor3.jpg', country[3], city[3], 'https://www.google.com/',2,'Отчество 3'),

        new Autor('Автор 4', 'Имя 4', new Date(1899,10,29), 'rrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegweg!', [9,10,11],
          'autor4.jpg', country[4], city[4], 'https://www.google.com/',3,'Отчество 4'),

        new Autor('Автор 5', 'Имя 5', new Date(1900,9,2), 'rrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegwegrrrrr sdghwrth ghreth gerthwrthwb gregh4rt bgrhwrthwb rewthwetgb fgwegqg saegweg!', [12, 13, 14],
          'autor5.jpg', country[5], city[5], 'https://www.google.com/',4),
      ];

    let users: IUser[] = [
      new User('admin', 'qwerty', 'email@email.com', '0', ['+375293334455'], null, null),
      new User('user0', 'qwerty', 'email@email.com', '1', ['+375293334455'], [2, 4, 5, 7, 8, 9], [2, 4, 5, 7, 8, 9]),
      new User('user1', 'qwerty', 'email@email.com', '2', ['+375293334455'], [3, 10, 11], [3, 10, 11]),
      new User('user2', 'qwerty', 'email@email.com', '3', ['+375293334455'], [4,5,12, 13, 14], [4,6,12, 13, 14]),
      new User('user3', 'qwerty', 'email@email.com', '4', ['+375293334455'], [0, 1, 6, 9], [0, 1, 6, 9]),
      new User('user4', 'qwerty', 'email@email.com', '5', ['+375293334455'], [1, 12, 14], [1, 12, 14]),
     

    ];

    let books: Book[] = [
      new Book('Автор 1 книга 1', 30, styleBook.Fantastic, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '1.jpg', 0, new Date(1983, 0, 1), 0, 1, ['0'],'book1.pdf'),
      new Book('Автор 1 книга 2', 30, styleBook.Fantastic, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '2.jpg', 0, new Date(2000, 1, 18), 1, 2, ['4', '5'], 'book2.pdf'),
      new Book('Автор 1 книга 3', 30, styleBook.Adventures, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '3.jpg', 0, new Date(1988, 3, 1), 2, 1, ['1'], 'book3.pdf'),
      new Book('Автор 2 книга 1', 30, styleBook.Detective, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '4.jpg', 1, new Date(1999, 1, 18), 3, 1, ['2'], 'book4.pdf'),
      new Book('Автор 2 книга 2', 30, styleBook.History, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '5.jpg', 1, new Date(1966, 1, 18), 4, 2, ['1', '3'], 'book5.pdf'),
      new Book('Автор 2 книга 3', 30, styleBook.Detective, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '6.jpg', 1, new Date(1978, 1, 18), 5, 1, ['1'], 'book6.pdf'),
      new Book('Автор 3 книга 1', 30, styleBook.Fantastic, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '7.jpg', 2, new Date(1983, 1, 18), 6, 1, ['4'], 'book7.pdf'),
      new Book('Автор 3 книга 2', 30, styleBook.Fantastic, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '8.jpg', 2, new Date(1889, 118), 7, 1, ['1'], 'book8.pdf'),
      new Book('Автор 3 книга 3', 30, styleBook.Fantasy, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '9.jpg', 2, new Date(1890, 5, 15), 8, 1, ['1'], 'book9.pdf'),
      new Book('Автор 4 книга 1', 30, styleBook.Fantastic, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '10.jpg', 3, new Date(1981, 3, 18), 9, 2, ['1', '4'], 'book10.pdf'),
      new Book('Автор 4 книга 2', 30, styleBook.Detective, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '11.jpg', 3, new Date(1982, 6, 18), 10, 1, ['2'], 'book11.pdf'),
      new Book('Автор 4 книга 3', 30, styleBook.Fantastic, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '12.jpg', 3, new Date(1984, 8, 18), 11, 1, ['2'], 'book12.pdf'),
      new Book('Автор 5 книга 1', 30, styleBook.History, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '13.jpg', 4, new Date(2011, 4, 23), 12, 2, ['3', '5'], 'book13.pdf'),
      new Book('Автор 5 книга 2', 30, styleBook.Fantastic, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '14.jpg', 4, new Date(2012, 8, 23), 13, 1, ['3'], 'book14.pdf'),
      new Book('Автор 5 книга 3', 30, styleBook.Fantasy, 'gggg еркцкроц пароыкрц4 керцкерц ыпртыеуруйр птрыртыкотцк', '15.jpg', 4, new Date(2020, 11, 28), 14, 2, ['3', '5'], 'book15.pdf'),

    ];

    
    return { autors, users, books};
  }
}
