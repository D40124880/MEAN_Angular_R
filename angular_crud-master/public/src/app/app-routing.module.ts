import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: NewComponent},
  {path: 'dogs/:id/edit', component: EditComponent},
  {path: 'dogs/:id', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
