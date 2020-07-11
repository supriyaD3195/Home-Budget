import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
password:string;
confirm_pass:string;
number:number;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  setPassword()
  {
    this.router.navigate(['/home-budget']);  
  }
}
