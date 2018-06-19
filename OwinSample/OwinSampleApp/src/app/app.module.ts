/****************** Modules *****************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

/****************** Components *****************/
import { AppComponent } from './app.component';

/******************* Services *****************/
import { HelloService } from './Services/HelloService';
import { Adal5HTTPService, Adal5Service } from 'adal-angular5';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HelloService, Adal5Service,
    { provide: Adal5HTTPService, useFactory: Adal5HTTPService.factory, deps: [HttpClient, Adal5Service] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
