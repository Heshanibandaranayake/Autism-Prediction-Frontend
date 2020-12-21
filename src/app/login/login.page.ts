import { Component, OnInit } from '@angular/core';
import {LoginDto} from './login-dto';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  posts: any[];
  loginData: LoginDto = {
    username: '',
    password: ''
  };
  isLoginError = false;
  loginError = '';

  constructor(private loginService: LoginService,
              private appComponent: AppComponent,
              private router: Router,
              public alertController: AlertController
  ) { }

  ngOnInit() {}
    Signin(){
        if (this.loginData.username && this.loginData.password){
            this.loginService.login(this.loginData)
                .subscribe((responseEntity) => {
                    this.onLoginSuccess(responseEntity);
                }, error => {
                    this.onLoginFailed(error);
                });
        } else {
            this.isLoginError = true;
            this.loginError = 'Plese fill inputs';
        }
    }
    onLoginSuccess(responceEntity: any){
        console.log(responceEntity);
        localStorage.setItem('token', responceEntity.token);
        localStorage.setItem('username', responceEntity.username);
        if (responceEntity.userType === 'USER'){
            this.router.navigate(['/view']);
        }
        this.isLoginError = false;
    }
    onLoginFailed(error: any){
        console.log(error);
        this.isLoginError = true;
        this.loginError = '*SignIn invalid';
    }
    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Oops!',
            subHeader: 'Wrong credentials',
            message: 'Please try again with correct credentials',
            buttons: ['OK']
        });

        await alert.present();
    }

}
