import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomFormsModule} from './forms/forms.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchListComponent } from './search-list/search-list.component';
import { OnlyNumbersComponent } from './only-numbers/only-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    OnlyNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
