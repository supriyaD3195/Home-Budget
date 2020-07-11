import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
proceed(){
this.router.navigate(['/myprofile']);
}
}
