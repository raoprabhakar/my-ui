import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdsDisplayerComponent } from './ads-displayer/ads-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AdsDisplayerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AdsDisplayerComponent]
})
export class AppModule { }
