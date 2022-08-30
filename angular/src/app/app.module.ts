import { UserService, UserServiceTwo } from './User.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChildModule } from './child/child.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    ChildModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: UserService,
      useClass: UserServiceTwo,
      deps: [HttpClientModule],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
