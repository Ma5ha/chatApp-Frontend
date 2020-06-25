import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from '../chat-room.service';
import { FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)])
  constructor(private router: Router) { }

  ngOnInit(): void {


    this.isLogged()
  }

  submit() {
    sessionStorage.setItem('username', this.username.value)
    this.router.navigate(['/chat'])

  }

  get isValid() {
    return this.username.valid
    // return false
  }

  isLogged() {
    const user = sessionStorage.getItem("username")
    if (!user) return
    this.router.navigate(['/chat'])
  }


}
