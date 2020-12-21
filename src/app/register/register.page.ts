import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {User} from './user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = {
    name: '',
    username: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  onSignup(){
    this.loginService.addUser(this.user)
        .subscribe((result) => this.onSignupComplete(result));
    this.router.navigate(['/folder']);
  }

  onSignupComplete(result){
    console.log(result);
  }

}
