import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
