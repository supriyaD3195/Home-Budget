

import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
email: string ;
password : string ;

  constructor( public router: Router) { }

  ngOnInit() {
  }
 signup(){

  this.router.navigate(['./home-budget']);
}
cancle()
{
  this.router.navigate(['./home-budget']);
}
}
