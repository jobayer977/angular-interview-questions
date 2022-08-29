import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [ChildComponent],
  providers: [],
  exports: [ChildComponent],
})
export class ChildModule {}
