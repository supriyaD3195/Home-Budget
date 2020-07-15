import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starting-pages',
  templateUrl: './starting-pages.page.html',
  styleUrls: ['./starting-pages.page.scss'],
})
export class StartingPagesPage implements OnInit {

  constructor(private router:Router,public menuCtrl:MenuController) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }
continue(){
  this.router.navigate(['/home-budget']); 
}
}
