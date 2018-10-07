import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Angular Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * The Shared Modules enables lazy-loaded modules to share some common
 * elements.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
