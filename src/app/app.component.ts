import { Component, OnInit, Renderer2,} from '@angular/core';
import { UserService, Autor, User, userType, MainComponent, passNameCheck, Validatepassword, message, countries, ValidateNum } from './index'
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { take } from 'rxjs/operators';
import { Observer, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  autor: Autor[] = [];
  title = 'Books';
  userType: string = userType.guest;
  enter: boolean = false;
  registration: boolean = false;
  formEntery!: FormGroup;
  formRegistration!: FormGroup;
  disabled: boolean = true;
  errMess: any = message;
  countries = countries;
  phoneControl: any;
  passwordHide: boolean = true;
  passwordCheckHide: boolean = true;
  img: string = "../assets/img/bcgImg/bcgImg1.jpg"
  constructor(
    private userservice: UserService,
    private rendere: Renderer2,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.userservice.userTypSubj.subscribe(res => {
      this.userType = res as userType
    })
    this.formInit();

  }

  formInit() {
    this.formEntery = this.fb.group({
      "userName": ['', [Validators.required, Validators.minLength(4)]],
      "password": ['', [Validators.required, Validators.minLength(6)]]
    });

    this.formRegistration = this.fb.group({
      "userName": ['', [Validators.required, Validators.minLength(4)], passNameCheck.bind(this.userservice)],
      "email": ['', [Validators.required, Validators.email]],
      "country": ['BLR'],
      "phone": ['+375', [ValidateNum, Validators.maxLength(13)]],
      "password": ['', [Validators.required, Validators.minLength(6)]],
      "passwordCheck": ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  enteryFormView() {
    if (this.userType === 'guest') {
      this.registration ? this.formCancel(this.formRegistration) : null;
      this.enter = true; 
    } else {
      this.registration ? this.formCancel(this.formRegistration) : null;
      this.userservice.shiftUserType(userType.guest);
      this.userservice.setUser(null);
    }
  }

  registrationFormView() {
    this.enter ? this.formCancel(this.formEntery):null
    this.registration = true;
    this.phoneControl = this.formRegistration.get('country')!.valueChanges.subscribe(res => {
      this.countries.map(item => {
        item.abb === res ? this.formRegistration.get('phone')?.setValue(item.phoneCode) : null
      })
    })

  }

  formCancel(form: FormGroup) {
    if (form === this.formEntery) {
      this.enter = false;
      this.formInit();
    } else {
      this.registration = false;
      this.phoneControl.unsubscribe();
      this.formInit();
      
    }
  }

  submitEntForm(form: FormGroup) {  
    if (form.valid) {
      this.userservice.userNamePassCheck(form).pipe(take(1)).subscribe(res => {
        if (res !== null) {
        res.userName === 'admin' ? this.userservice.shiftUserType(userType.admin) : this.userservice.shiftUserType(userType.user);
        this.userservice.setUser(res);
        this.enter = false;
        this.formInit();
      } else {
        form.get('password')?.setErrors({ passNameNone: true })
        form.get('userName')?.setErrors({ passNameNone: true })
        this.formEntery.valueChanges.pipe(take(1)).subscribe( res => {                                 
          res && this.formEntery.get('password')?.getError('passNameNone') ?
            this.formEntery.get('password')?.setErrors(null) : null;
          res && this.formEntery.get('userName')?.getError('passNameNone') ?
            this.formEntery.get('userName')?.setErrors(null) : null
        })
      }
     })
    } 
  }

  submitRegForm(form: FormGroup): void{
    if (form.get('password')?.value !== form.get('passwordCheck')?.value) {
      form.get('passwordCheck')?.setErrors({ passErr: true });
      form.get('password')?.setErrors({ passErr: true });
      return; }
    if (form.valid) {
      let phone: Array<string> = [];
      form.get("phone")?.value.length >= 11 ? phone.push(form.get("phone")?.value) : phone.push('');
      this.userservice.createUser(
        new User(
          form.get("userName")!.value,
          form.get("password")?.value,
          form.get("email")?.value,
          null,
          phone,
          null,
          null));
         
      this.registration = false;
      this.formInit();
    } else {
    this.userservice.formTouched(form);}
  }

  errMessage(form: FormGroup, fildName: string) {
    for (let err in form.get(fildName)?.errors) {
      return this.errMess[fildName][err];}
  }
 
  mainPage() {
 this.router.navigate(['']);
    
  }
}






