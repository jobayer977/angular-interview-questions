import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class UserServiceTwo {
  constructor(private http: HttpClient) {
    console.log('UserServiceTwo created.', ...arguments);
  }
  getUser() {
    return {
      name: 'User Two',
      email: 'jon@m.com',
    };
  }
}
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
    console.log('UserService created.', ...arguments);
  }
  getUser() {
    return {
      name: 'User',
      email: 'user@gmail.com',
    };
  }
}
