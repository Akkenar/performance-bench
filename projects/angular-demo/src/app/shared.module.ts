import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Angular Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppStoreModule } from './app-store.module';

/**
 * The Shared Modules enables lazy-loaded modules to share some common
 * elements.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppStoreModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppStoreModule,
  ],
})
export class SharedModule {}
