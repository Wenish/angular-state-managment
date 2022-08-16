import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageTrainsComponent } from './pages/page-trains/page-trains.component';
import { PageTrainstationsComponent } from './pages/page-trainstations/page-trainstations.component';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'trains',
    component: PageTrainsComponent
  },
  {
    path: 'trainstations',
    component: PageTrainstationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
