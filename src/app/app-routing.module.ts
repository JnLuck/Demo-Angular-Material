import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreComponent } from './more/more.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'more',
    component: MoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
