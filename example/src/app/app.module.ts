import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChildModule } from './child/child.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CommonModule, BrowserModule, ChildModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
