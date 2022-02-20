import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DataService,
  AutorService,
  UserService,
  ApiRequestService,
  BookService,
  AuxiliaryService,
  OnlyNambersDirective,
  HoverCard,
  PreloaderComponent,
  ModalWinComponent,
  EditBookComponent,
  PdfReaderComponent,
  AutorComponent,
  CardComponent,
  BookComponent,
  MainComponent,
  EntryComponent,
  SectionComponent,
  StylesListComponent,
  StylesAutorsBooksComponent
} from './index'

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { map } from 'rxjs/operators';
import { Ng2TelInputModule } from 'ng2-tel-input';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { HoverBtnDirective } from './shared/directives/hover-btn.directive';
//MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RegistrationComponent } from './components/forms/registration/registration.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

import { SlickCarouselModule } from 'ngx-slick-carousel';








@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OnlyNambersDirective,
    HoverCard,
    BookComponent,
    CardComponent,
    AutorComponent,
    PdfReaderComponent,
    HoverBtnDirective,
    PreloaderComponent,
    EditBookComponent,
    ModalWinComponent,
    EntryComponent,
    RegistrationComponent,
    SectionComponent,
    StylesListComponent,
    StylesAutorsBooksComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    PdfViewerModule,

    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatTooltipModule,
    MatDialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,

  SlickCarouselModule
  
  ],
 
  providers: [AutorService, UserService, ApiRequestService, BookService,  AuxiliaryService],
  bootstrap: [AppComponent],
  entryComponents: [ModalWinComponent]
})
export class AppModule { }
