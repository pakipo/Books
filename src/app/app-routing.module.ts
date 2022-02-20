import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './components/editBook/editBook.component';
import {
  MainComponent,
  BookComponent,
  AutorComponent,
  PdfReaderComponent,
  StylesListComponent,
  StylesAutorsBooksComponent,
  AutorListComponent
} from './index';
import { AdminGuard } from './shared/guard/admin.guard';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "book/:id", component: BookComponent },
  { path: "autor/:id", component: AutorComponent },
  { path: "reader/:bookPdf", component: PdfReaderComponent },
  { path: "editBook/:id", canActivate:[AdminGuard], component: EditBookComponent },
  { path: "stilesAutorsBooks/:title", component: StylesAutorsBooksComponent },
  { path: "stylesList", component: StylesListComponent },
  { path: "autorList", component: AutorListComponent },
 { path: "", redirectTo: "main", pathMatch: "full" }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
