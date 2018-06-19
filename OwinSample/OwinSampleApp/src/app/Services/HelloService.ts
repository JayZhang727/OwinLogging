import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Adal5HTTPService, Adal5Service } from 'adal-angular5';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class HelloService {

  constructor(private _httpClient: HttpClient, private adal5HttpService: Adal5HTTPService, private adal5Service: Adal5Service) { }

  public getApiHelloWorldSecureResponse(): Observable<any> {
    var options: any = this.prepareOptions();
    var result = this.adal5HttpService.get('http://localhost:52526/api/hello/secure', options);
    return result;
  }

  public getApiHelloWorldNonSecureResponse(): Observable<any> {
    var result = this._httpClient.get('http://localhost:52526/api/hello/non-secure');
    return result;
  }

  private prepareOptions(): any {
    let headers = new HttpHeaders();
    let options = null;

    headers = headers
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjkzNjAxNTMsImV4cCI6MTU2MDg5NjE1MywiYXVkIjoiaHR0cHM6Ly9jbW9wc2RldmFwaS5henVyZXdlYnNpdGVzLm5ldCIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.-ZrY5nrYI1_mipj5XgaYC0jVXO_nMUlrZfNwouZWLmc`);
    options = { headers };
    return options;
  }
}
