

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireModule } from "angularfire2";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SuperTabsModule } from "@ionic-super-tabs/angular";
import { from } from "rxjs";
import{AngularFireAuthModule} from 'angularfire2/auth';
import { ChartsModule } from "ng2-charts";
import{AngularFireAuth} from 'angularfire2/auth';
import { environment } from '../environments/environment';
 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    SuperTabsModule.forRoot(),
    FormsModule,
   // AngularFireModule.initializeApp(environment.firebaseConfig),
    ChartsModule
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
