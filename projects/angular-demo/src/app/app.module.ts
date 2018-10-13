import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoaderModule } from './loader/loader.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoaderModule,
    HeaderModule,
    BrowserAnimationsModule,
    AppStoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
