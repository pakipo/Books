import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent, BookComponent,AutorComponent } from './index';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "main", component: MainComponent },
  { path: "book/:id", component: BookComponent },
  { path: "autor/:id", component: AutorComponent },
 { path: "", redirectTo: "main", pathMatch: "full" }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
