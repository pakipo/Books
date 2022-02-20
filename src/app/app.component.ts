import { Component, OnInit, Renderer2, } from '@angular/core';

import {
  UserService,
  Autor,
  User,
  userType,
  MainComponent,
  PreloaderComponent,
  ModalWinComponent
} from './index'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuxiliaryService } from './shared/services/auxiliary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  autor: Autor[] = [];
  title = 'Books';
  userType: string = userType.guest;
  preloaderToggle: boolean = false;
  enter: boolean = false;
  registration: boolean = false;
  img: string = "../assets/img/bcgImg/bcgImg1.jpg"

  constructor(
    private userservice: UserService,
    private rendere: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private auxiliary: AuxiliaryService) { }

  ngOnInit(): void {
    this.auxiliary.preloaderToggleSubj.subscribe(res => {
      this.preloaderToggle = res as boolean;
    })

    this.userservice.userTypSubj.subscribe(res => {
      this.userType = res as userType;

    })
    
  }

  mainPage() {
    this.router.navigate(['']);

  }
  enteryFormdisplayed() {
    if (this.userType === 'guest') {
      this.enter = true;
    } else {
      this.userservice.shiftUserType(userType.guest)
      this.router.navigate(['main'])
      }
     
  }

  getUserName() {
    if (this.userType === userType.guest) {
      return 'Гость'
    } else {
      return this.userservice.user!.userName
    }
  }

  goToStylesList() {
    this.router.navigate(['stylesList'])
  }

  goToAutorList() {
    this.router.navigate(['autorList'])
  }
}






