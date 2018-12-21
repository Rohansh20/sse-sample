import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sse-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getWelcomeResponse?: any;

  constructor(private _http: HttpClient) {}

  async testGetWelcome(): Promise<void> {
    const response = await this._http.get<any>('http://localhost:3333/welcome').toPromise();
    this.getWelcomeResponse = response;
  }
}
