import { Component } from '@angular/core';
import { UserService } from './User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService) {
    console.log(this);
  }
  callPhone(value: any) {
    console.log(value.value);
  }
}
