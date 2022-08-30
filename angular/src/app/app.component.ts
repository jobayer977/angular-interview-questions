import { UserService, UserServiceTwo } from './User.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService) {}
  callPhone(value: any) {
    console.log(value.value);
  }
}
