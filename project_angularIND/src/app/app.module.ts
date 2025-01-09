import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllNursesComponent } from './get-all-nurses/get-all-nurses.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
providers: [provideHttpClient(withFetch())]
@NgModule({
  declarations: [
    AppComponent,
    GetAllNursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
