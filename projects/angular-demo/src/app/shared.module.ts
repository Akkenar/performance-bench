import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Angular Modules
import { NgModule } from '@angular/core';
import { LoaderModule } from './loader/loader.module';

/**
 * The Shared Modules enables lazy-loaded modules to share some common
 * elements.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, LoaderModule],
  exports: [CommonModule, HttpClientModule, LoaderModule],
})
export class SharedModule {}
