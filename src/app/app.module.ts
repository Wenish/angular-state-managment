import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTrainsComponent } from './pages/page-trains/page-trains.component';
import { PageTrainstationsComponent } from './pages/page-trainstations/page-trainstations.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTrainsComponent,
    PageTrainstationsComponent,
    PageHomeComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
