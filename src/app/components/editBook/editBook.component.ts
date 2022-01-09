import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AutorService,
  AuxiliaryService,
  UserService,
  BookService,
  message,
  Autor,
  styleBook,
  Book,
  userType,
  PageCountCheck,
} from '../../index';
import { map, concatMap } from 'rxjs/operators';
import { FormGroup, Validators, FormBuilder,FormControl } from '@angular/forms';


@Component({
  selector: 'app-editBook',
  templateUrl: './editBook.component.html',
  styleUrls: ['./editBook.component.scss']
})
export class EditBookComponent implements OnInit {
  userType: userType = userType.admin;
  bookId!: any;
  book!: Book;
  editBookForm!: FormGroup;
  errMess: any = message;
  preLoad: boolean = false;
  autor!: Autor;
  styleBookArr: Array<string> = [];
  curBookStyle!: string;
  formInitState: any = {};
  imgPath: string = "../assets/img/imgBooks/";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService,
    private bookService: BookService,
    private autorServis: AutorService,
    private auxiliary: AuxiliaryService,
    private fb: FormBuilder,
  ) { }
  get formArr(): any { return this.editBookForm.get('formArr'); }

  ngOnInit(): void {
    this.preLoad = true;
    this.route.params.pipe(
      map(par => { this.bookId = par.id as number; }),
      concatMap(() => this.bookService.getBook(this.bookId)),

      concatMap((book) => {
        this.book = book as Book;
        Object.values(styleBook).map(style => { this.styleBookArr.push(style) });
        this.curBookStyle = this.book.style;
        return this.autorServis.getAutor(this.book.autorId)
      })).subscribe(autor => {
        this.autor = autor as Autor;
        this.formInit();
        this.formInitState["title"] = this.book.title;
        this.formInitState["releaseDate"] = this.book.releaseDate;
        this.formInitState["pageCount"] = this.book.pageCount;
        this.formInitState["shortDescription"] = this.book.shortDescription;
        this.formInitState["surname"] = this.autor.surname;
        this.formInitState["name"] = this.autor.name;
        this.formInitState["patronymic"] = this.autor.patronymic;

      }
      )
  }

  formInit() {
    this.editBookForm = this.fb.group({
      formArr: this.fb.array([
        this.fb.group({
          "title": [this.book.title, [Validators.required]],
          "releaseDate": [new Date(this.book.releaseDate)],
          "pageCount": [this.book.pageCount, [Validators.required, PageCountCheck]],
          "style": [this.book.style],
          "shortDescription": [this.book.shortDescription, [Validators.required]]
        }),
        this.fb.group({
          "surname": [this.autor.surname],
          "name": [this.autor.name, [Validators.required]],
          "patronymic": [this.autor.patronymic]
        })
      ])
    });
    this.preLoad = false;
  }

  // текст ошибки input
  errMessage(form: FormGroup, fildName: string) {
    for (let err in form.get(fildName)?.errors) {
      return this.errMess[fildName][err];
    }
  }

  // input type=number  +1,-1
  pageCountControl(form: FormGroup, ctr: string) {
    if (ctr === 'up') {
      form.get('pageCount')?.setValue(form.get('pageCount')?.value + 1);
    } else {
      form.get('pageCount')?.value <= 1 ? form.get('pageCount')?.setValue(1) : form.get('pageCount')?.setValue(form.get('pageCount')?.value - 1);
    }
  }

  //очистить input 
  inputClear(field: FormControl, inp: HTMLTextAreaElement | HTMLInputElement) {
   
    inp.type === 'number' ? field.setValue(1) : field.reset();
    field.markAsDirty()
  }

  inputDateClear(field: FormControl) {
    console.log(field)
  }
 
  //обновить input
  inputRefresh(field: FormControl, key: string) {

    if (key === 'releaseDate') {
      field.reset(new Date(this.formInitState[key]))
    } else {
      field.reset(this.formInitState[key])
    }
  }

  releaseDate() {
    return this.bookService.formatDate(this.formArr?.get([0]).get('releaseDate').value)
  }

  autorInfo() {
    let autorInfo: string = '';
    this.formArr?.get([1]).get('surname').value ? autorInfo = this.formArr?.get([1]).get('surname').value : '';

    autorInfo = autorInfo ? autorInfo + ' ' + this.formArr?.get([1]).get('name').value : this.formArr?.get([1]).get('name').value;

    autorInfo = this.formArr?.get([1]).get('patronymic').value !== '' ? autorInfo + ' ' + this.formArr?.get([1]).get('patronymic').value : autorInfo;
    return autorInfo;
  }

  cancel() {
    if (this.editBookForm.dirty) {
      let modalWinData = {
        textContent: 'Если уйти сейчас, внесенные изменения не будут сохранены.',
        btnCancelText: 'Продолжить редактирование',
        btnCancelColor: 'warn',
        btnOkText: 'Уйти',
        btnOkColor: 'primary' };
     
      this.auxiliary.openDialog(modalWinData).subscribe(
        data => { data.answer ? window.history.back() : null; })
    } else {
      window.history.back()
    }
  }

 
  done() {
    let updateObj = {}
    let formBook = this.formArr.get([0]);
    let formAutor = this.formArr.get([1]);

    updateObj['book'] = formBook.dirty ? false : true;
    updateObj['autor'] = formAutor.dirty ? false : true;

    updateObj['book'] && updateObj['autor'] ? window.history.back() : null

    if (formBook.dirty) {
      Object.keys(formBook.controls).map((key) => {
        if (formBook.controls[key].dirty) {
          this.book[key] = formBook.controls[key].value
        }
      })
    }

    if (formAutor.dirty) {
      Object.keys(formAutor.controls).map((key) => {
        if (formAutor.controls[key].dirty) {
          this.autor[key] = formAutor.controls[key].value
        }
      })
    }

    if (!updateObj['book']) {
      this.auxiliary.preloaderCtrl(true)
      this.bookService.updateBook(this.book).subscribe(res => {
        updateObj['book'] = true;
        updateObj['book'] && updateObj['autor'] ? window.history.back() : null;
      });
    }

    if (!updateObj['autor']) {
      this.auxiliary.preloaderCtrl(true)
      this.autorServis.updateAutor(this.autor).subscribe(res => {
        updateObj['autor'] = true;
        updateObj['autor'] && updateObj['book'] ? window.history.back() : null;
      });
    }

  }

}

