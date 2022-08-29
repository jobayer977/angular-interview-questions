import { Component, OnInit } from '@angular/core';

import { UserService } from '../User.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.userService.getUser());
  }
}
