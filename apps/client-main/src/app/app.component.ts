import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sse-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getWelcomeResponse?: any;
  sseCounterResponse: any[] = [];
  sseGetTableOfResponse: any[] = [];

  constructor(private _http: HttpClient) {}

  async testGetWelcome(): Promise<void> {
    const response = await this._http
      .get<any>('http://localhost:3333/welcome')
      .toPromise();
    this.getWelcomeResponse = response;
  }

  testSseCounter(): void {
    const source = new EventSource('http://localhost:3333/counter');
    source.addEventListener('counter', (event: MessageEvent) => {
      this.sseCounterResponse.push(JSON.parse(event.data));
    });
    source.addEventListener('close', () => {
      // Otherwise, the browser would keep re-trying and we'll keep getting data
      source.close();
    });
    source.onerror = event => {
      console.error(event);
    };
  }

  testSseGetTableOf(): void {
    const source = new EventSource('http://localhost:3333/getTableOf?number=3');
    source.addEventListener('getTableOf', (event: MessageEvent) => {
      this.sseGetTableOfResponse.push(JSON.parse(event.data));
    });
    source.addEventListener('close', () => {
      // Otherwise, the browser would keep re-trying and we'll keep getting data
      source.close();
    });
  }
}
