import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService, AutorService, UserService, ApiRequestService,BookService,OnlyNambersDirective,HoverCard } from './index'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { map } from 'rxjs/operators';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { BookComponent } from './components/book/book.component';
import { CardComponent } from './components/card/card.component';
import { AutorComponent } from './components/autor/autor.component';








@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OnlyNambersDirective,
    HoverCard,
    BookComponent,
    CardComponent,
    AutorComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule

  
  
  ],
  providers: [AutorService, UserService, ApiRequestService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
