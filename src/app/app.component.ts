import { NavigationExtras } from '@angular/router';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
sideMenu()
{
  this.navigate =
  [
    
    {
      title : "Home",
      url   : "/home-budget",
      icon  : "home"
    },
    {
      title : "Add expenses",
      url   : "/add-expenses",
      icon  : "list"
    },
    {
      title : "Activity",
      url   : "/details",
      icon  : "list"
    },
    
     {
      title : "My Profile",
      url   : "/myprofile",
      icon  : "person"
    },
    
    {
      title : "Change password",
      url   : "/change-password",
      icon  : "list"
    },
    {
      title : "Logout",
      url   : "/home-budget",
      icon  : "power"
    },
  ]
}
}
