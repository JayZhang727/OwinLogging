import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Adal5Service } from 'adal-angular5';
import { HelloService } from './Services/HelloService';


const config = {
  tenant: 'common',
  clientId: 'clientId',
  endpoints: {
    ApiUri: "https://sample.sample.com",
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Owin Sample App';
  helloCallResponse: any;
  secureHelloCallResponse: any;
  error: boolean = false;

  constructor(private helloService: HelloService, private adal: Adal5Service, private _httpService: HttpClient) {
    this.adal.init(config);
  }
  
  ngOnInit() {
    // Handle callback if this is a redirect from Azure
    this.adal.handleWindowCallback();

    // Check if the user is authenticated. If not, call the login() method
    if (!this.adal.userInfo.authenticated) {
      this.adal.login();
    }

    // Log the user information to the console
    console.log('user info:', this.adal.userInfo);
  }

  // Logout Method
  public logout() {
    this.adal.logOut();
  }

  public getHelloNonSecure() {

    this.helloService.getApiHelloWorldNonSecureResponse().subscribe(values => {
      this.helloCallResponse = values;
    },
      error => {
        this.error = true;
      },
      () => {
        this.error = false;
      });
  }

  public getHelloSecure() {
    this.helloService.getApiHelloWorldSecureResponse().subscribe(values => {
      this.secureHelloCallResponse = values;
    },
      error => {
        this.error = true;
      },
      () => {
        this.error = false;
      });
  }
}
