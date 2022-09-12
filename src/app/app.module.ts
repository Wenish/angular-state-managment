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
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { FormComponent } from './components/form/form.component';
import { FormState } from './store/form.store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageTrainsComponent,
    PageTrainstationsComponent,
    PageHomeComponent,
    ListComponent,
    ListItemComponent,
    FormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxsModule.forRoot([TrainsState, TrainstationsState, FormState], {
      developmentMode: !environment.production
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
