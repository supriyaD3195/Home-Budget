import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  Imagearray:any;
  
  constructor(public router:Router) { 
    this.Imagearray=[{'image':'../../assets/icon/nav.jpg'},{'image':'../../assets/icon/slide2.jpeg'},{'image':'../../assets/icon/slide3.jpg'}]

  }
  
  // public doughnutChartLabel:string[]=['rent','grocery','vegitables'];
  // public doughnutChartData:number[]=[5000,2000,1000];
  // public doughnutChartType:string='doughnut';

  ngOnInit() {
  }
    slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    loop:true,
   
  
   };
  
 proceed(){
     this.router.navigate(['./add-expenses']);

   }
   history()
   {
     this.router.navigate(['./details'])
   }

}
