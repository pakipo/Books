import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  UserService,
  BookService,
  AuxiliaryService,
  Book,
  userType,
  ModalWinComponent
} from '../../index';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { map, concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  img: string = "../assets/img/imgBooks/";
  constructor(
    private userservice: UserService,
    private bookservis: BookService,
    private router: Router,
    private dialog: MatDialog,
    private auxiliary: AuxiliaryService
  ) { }

  @Input('book') book!: Book;

  @Input('userType') userType!: userType;

  @Output() delBook = new EventEmitter();

  ngOnInit(): void {
  
  }

  liked(e: Event, book: Book) {
    this.bookservis.liked(e, book);
  }

  likedClass(book: Book) {
    if (this.userType !== 'guest') {
      let id = this.userservice.getUser()?.favoriteBooks.find(item => item === book.id)
      return id || id === 0 ? 'liked' : ''
    } else { return '' }
  }

  goToBook(id: number) {
    this.book.views = this.book.views + 1;
    this.bookservis.updateBook(this.book).subscribe()
    this.router.navigate(['book', id]);
  }

  goToEditBook(id: number) {
    this.router.navigate(['editBook', id]);
  }

  deleteBook(id: number) {
    this.openModal().subscribe(
      data => {
        if (data.answer) {
          this.auxiliary.preloaderCtrl(true);
          this.bookservis.deleteBook(id).subscribe(
            res => {
              this.delBook.emit();
            }
          )
        }
      })
  }

  openModal() {
    const modalWin = new MatDialogConfig();
    modalWin.disableClose = true;
    modalWin.closeOnNavigation = false;

    modalWin.data = {
      textContent: 'Книга будет безвозвратно удалена из библиотеки.',
      btnCancelText: 'Отмена',
      btnCancelColor: 'primary',
      btnOkText: 'Удалить',
      btnOkColor: 'warn',
    }
    const modalRef = this.dialog.open(ModalWinComponent, modalWin);
    return modalRef.afterClosed().pipe(
      map(data => { return data })
    );
  }
}


