import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing my module:
import { ProductModule } from './product/product.module';

// Importing Angular provided modules:
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProductModule,HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
