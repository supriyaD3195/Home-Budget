import { async } from '@angular/core/testing';
import {  Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastController, MenuController } from '@ionic/angular';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home-budget',
  templateUrl: './home-budget.page.html',
  styleUrls: ['./home-budget.page.scss'],
})
export class HomeBudgetPage implements OnInit {
username: string=""
password: string=""
passwordType: string='password';
name = new FormControl('');

passwordIcon: string = 'eye-off';
  constructor(public router: Router,public auth: AngularFireAuth,public toastController: ToastController, public menuCtrl:MenuController) {
    this.menuCtrl.enable(true);
   }

  ngOnInit() {
  }
  async signin()
  { 
    // const { username,password } = this
    // try {
    //   const res= await this.auth.signInWithEmailAndPassword(username + 'supriyadharma03@gmail.com', password + 'password')
    // } catch (error) {
    //   console.dir(error)
    //   if(error.code === "auth/invalid-api-key"){
    //     console.log("user not found");
    //   }
    // }


    if(this.username=='admin'&& this.password=='admin123')
    {
    this.router.navigate(['/dashboard']);
    }
    else{
      {
        const toast = await this.toastController.create({
          message: 'Please check your username and password',
          duration: 2000
        });
        toast.present();
      }
    }
  }
  signup()
  {
    this.router.navigate(['/sign-up']);
  }
  forgot_password()
  {
    this.router.navigate(['/forgot-password']);
  }
  public showPassword: boolean = false;

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }


}