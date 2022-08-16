import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTrainsComponent } from './pages/page-trains/page-trains.component';
import { PageTrainstationsComponent } from './pages/page-trainstations/page-trainstations.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { TrainsState } from './store/trains.store';
import { environment } from 'src/environments/environment';
import { TrainstationsState } from './store/trainstations.store';

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
    NgxsModule.forRoot([TrainsState, TrainstationsState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
