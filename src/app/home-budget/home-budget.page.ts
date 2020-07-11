import {  Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home-budget',
  templateUrl: './home-budget.page.html',
  styleUrls: ['./home-budget.page.scss'],
})
export class HomeBudgetPage implements OnInit {
username: string;
password: string;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  signin()
  { 
    if (this.username =='admin' && this.password =='admin123')
      {
    this.router.navigate(['/dashboard']);
    } 
  else {
     alert('please correct your username and password');
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
}