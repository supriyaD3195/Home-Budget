import { SignupService } from './../signup.service';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
username: string =""
password : string =""
cpassword : string =""
  constructor( public router: Router,public auth: AngularFireAuth, private _register:SignupService) { }
register=[
  {
username :'supriya',
password:'123456',
cpassword:'123456'
  }
]
  ngOnInit() {
  }
  async proceed(){
this._register.signup(this.register).subscribe(
  (response) => console.log(response),
  (error) =>console.log(error)
)
    
    // const { username , password, cpassword }=this
    // if(password !== cpassword){
    //   return console.error("password dont match")
    // }
    // try {
    //   const res= await this.auth.createUserWithEmailAndPassword(username + 'supriyadharma03@gmail.com', password + '123456789')
    //   console.log(res)
    // } catch (error) {
    //   console.dir(error)
    // }
this.router.navigate(['./home-budget']);

}
cancle()
{
  this.router.navigate(['./home-budget']);
}
}
