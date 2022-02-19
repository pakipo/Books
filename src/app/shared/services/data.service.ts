import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Autor, Book, User, IUser, styleBook, country, city, Ebiography } from '../../index'
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
    
 

  createDb(){
    let autors: Autor[] =
      [
        new Autor('Га́ррисон', 'Га́рри', new Date(1925, 2, 12), Ebiography.гаррисон,[0,1], 'гаррисон.jpg', 'США', 'Стамфорд, Коннектикут', 'https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%80%D0%B8_%D0%93%D0%B0%D1%80%D1%80%D0%B8%D1%81%D0%BE%D0%BD', 0,'', new Date(2012,7,15)),

        new Autor('Брэдбери', 'Рэй Ду́глас', new Date(1920, 7, 22), Ebiography.брэдбери,
          [2, 3, 4], 'bradbury.jpg', 'США', ' Уокиган, Иллинойс', 'https://ru.wikipedia.org/wiki/%D0%91%D1%80%D1%8D%D0%B4%D0%B1%D0%B5%D1%80%D0%B8,_%D0%A0%D1%8D%D0%B9', 1, '', new Date(2012, 5, 5)),

        new Autor('Аку́нин', 'Бори́с', new Date(1956, 4, 20), Ebiography.акунин, [5, 6, 7, 8], 'акунин.jpg', 'Грузинская ССР', ' Зестафони', 'https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%90%D0%BA%D1%83%D0%BD%D0%B8%D0%BD', 2, ''),

        new Autor('Верн', 'Жюль Габриель', new Date(1828, 1, 8), Ebiography.верн, [9, 10, 11, 12], 'верн.jpg', 'Франция', 'Нант', 'https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%BD,_%D0%96%D1%8E%D0%BB%D1%8C', 3, '', new Date(1905, 2, 24)),

        new Autor('Лондон', 'Джек', new Date(1876, 0, 12), Ebiography.лондон, [13, 14, 15], 'джек лондон.jpg', 'США', 'Сан-Франциско, Калифорния', 'https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%B5%D0%BA_%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD', 4, '', new Date(1916, 10, 22)),

        new Autor('Кинг', 'Стивен', new Date(1947, 8, 21), Ebiography.кинг, [16, 17, 18], 'кинг.jpg', 'США', 'Портленд, Мэн', 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD%D0%B3,_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD', 5, ''),

        new Autor('Роулинг', 'Джоан', new Date(1965, 6, 31), Ebiography.роулинг, [19, 20, 21], 'роулинг.jpg', 'Англия', 'Йейт, Глостершир', 'https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%83%D0%BB%D0%B8%D0%BD%D0%B3,_%D0%94%D0%B6%D0%BE%D0%B0%D0%BD', 6, ''),

        new Autor('Дюма', 'Александр (отец)', new Date(1802, 6, 24), Ebiography.дюма, [22, 23, 24], 'дюма.jpg', 'Франция', '	Пюи', 'https://ru.wikipedia.org/wiki/%D0%94%D1%8E%D0%BC%D0%B0,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_(%D0%BE%D1%82%D0%B5%D1%86)', 7, '', new Date(1870, 11, 5)),

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
      new Book('Вся стальная крыса. Том 1', 759, styleBook.Fantastic, 'Vsya_Stalnaya_Krysa.jpeg', 0, new Date(1985, 0, 1), 0, 3, ['0'], 'Vsya-Stalnaya-Krysa-Tom-1.pdf'),

      new Book('Вся стальная крыса. Том 2', 955, styleBook.Fantastic, 'Vsya_Stalnaya_Krysa_2.jpg', 0, new Date(1985, 0, 1), 1, 1, ['0'], 'Vsya_Stalnaya_Kryisa_Tom_2.pdf'),

      new Book('451 градус по Фаренгейту', 93, styleBook.Fantastic, '451_градуc_по_Фаренгейту.jpg', 1, new Date(1953, 0, 1), 2, 2, ['4', '5'], '451 градус по Фаренгейту.pdf'),

      new Book('Марсианские хроники', 146, styleBook.Fantastic, 'марсианские_хроники.jpg', 1, new Date(1951, 0, 1), 3, 2, ['4', '5'], 'марсианские_хроники.pdf'),

      new Book('Смерть - дело одинокое', 407, styleBook.Detective, 'смерть дело одинокое.jpg', 1, new Date(1985, 0, 1), 4, 2, ['4', '5'], 'Smert-delo_odinokoe.pdf'),

      new Book('Нефритовые четки', 411, styleBook.Detective, 'Нефритовые_чётки.jpg', 2, new Date(2006, 0, 1), 5, 2, ['4', '5'], 'Нефритовые четки.pdf'),

      new Book('Азазель', 411, styleBook.Detective, 'Azazel.jpg', 2, new Date(1998, 0, 1), 6, 2, ['4', '5'], 'Azazel.pdf'),

      new Book('Ореховый будда', 235, styleBook.History, 'orekhovyy-budda.jpg', 2, new Date(1998, 0, 1), 7, 2, ['4', '5'], 'Orehovнy-Budda.pdf'),

      new Book('Бох и шельма', 260, styleBook.History, 'boh_i_shelma.jpg', 2, new Date(2015, 0, 1), 8, 2, ['4', '5'], 'Boh-i-Shelma.pdf'),

      new Book('20000 лье под водой', 278, styleBook.Adventures, '20000_лье.jpg', 3, new Date(1869, 0, 1), 9, 2, ['4', '5'], '20_000_lye_pod_vodoy.pdf'),

      new Book('Дети капитана Гранта', 616, styleBook.Adventures, 'дети_капитана_гранта.jpg', 3, new Date(1867, 0, 1), 10, 2, ['4', '5'], 'Deti_kapitana_Granta.pdf'),

      new Book('Путешествие к центру Земли', 113, styleBook.Adventures, 'путешествие_к_центру_земли.jpg', 3, new Date(1864, 0, 1), 11, 2, ['4', '5'], 'Puteshestvie_k_tsentru_Zemli.pdf'),

      new Book('Вокруг света за 80 дней', 270, styleBook.Adventures, 'вокруг_света _за_80_дней.jpg', 3, new Date(1872, 0, 1), 12, 2, ['4', '5'], 'Vokrug_sveta_za_80_dney.pdf'),

      new Book('Белый Клык', 323, styleBook.Adventures, 'белый_клык.jpg', 4, new Date(1906, 0, 1), 13, 2, ['4', '5'], 'Bely_Klyk.pdf'),

      new Book('Зов предков', 96, styleBook.Adventures, 'зов_предков.jpg', 4, new Date(1903, 0, 1), 14, 2, ['4', '5'], 'Zov_predkov.pdf'),

      new Book('Морской волк', 1091, styleBook.Adventures, 'морской_волк.jpg', 4, new Date(1904, 0, 1), 15, 2, ['4', '5'], 'Morskoy_volk.pdf'),

      new Book('Стрелок', 241, styleBook.Fantasy, 'стрелок.jpg', 5, new Date(1982, 0, 1), 16, 2, ['4', '5'], 'Strelok.pdf'),

      new Book('Извлечение троих', 367, styleBook.Fantasy, 'извлечение троих.jpg', 5, new Date(1987, 0, 1), 17, 2, ['4', '5'], 'Izvlechenie_troih.pdf'),

      new Book('Колдун и кристал', 724, styleBook.Fantasy, 'колдун и кристал.jpg', 5, new Date(1997, 0, 1), 18, 2, ['4', '5'], 'Koldun_i_kristall.pdf'),

      new Book('Гарри Поттер и Кубок огня', 336, styleBook.Fantasy, 'гарри поттер и кубок огня.jpg', 6, new Date(2000, 0, 1), 19, 2, ['4', '5'], 'Гарри Поттер и кубок огня.pdf'),

      new Book('Гарри Поттер и узник Азкабана', 204, styleBook.Fantasy, 'гарри поттер и узник азкабана.jpg', 6, new Date(1999, 0, 1), 20, 2, ['4', '5'], 'Гарри Поттер и узник Азкабана.pdf'),

      new Book('Гарри Поттер и Орден Феникса', 781, styleBook.Fantasy, 'гарри поттер и орден феникса.jpg', 6, new Date(2004, 0, 1), 21, 2, ['4', '5'], 'Garri-Potter-i-Orden-Feniksa.pdf'),

      new Book('Три мушкетера', 380, styleBook.History, 'три мушкетера.jpg', 7, new Date(1844, 0, 1), 22, 2, ['4', '5'], 'Три мушкетёра.pdf'),

      new Book('Двадцать лет спустя',477, styleBook.History, 'двадцать лет спустя.jpg', 7, new Date(1845, 0, 1), 23, 2, ['4', '5'], 'Двадцать лет спустя.pdf'),

      new Book('Граф Монте-Кристо', 669, styleBook.History, 'монте-кристо.jpg', 7, new Date(1845, 0, 1), 24, 2, ['4', '5'], 'Graf_Monte-Kristo.pdf'),

   

      
   
    ];

    
    return { autors, users, books};
  }
}
