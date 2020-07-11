import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  proceed()
  {
    this.router.navigate(['/update-profile']);  
  }
}
