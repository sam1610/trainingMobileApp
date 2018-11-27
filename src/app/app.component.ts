import { AuthComponent } from './../pages/auth/auth';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as  firebase  from 'firebase'

import { TabsPage } from '../pages/settings/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import { ThrowStmt } from '@angular/compiler';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any =TabsPage;
  optionsPage:any = OptionsPage;
  authComponent: any = AuthComponent;

  @ViewChild('content') content :NavController;
  isAuth: boolean;
  
  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl:MenuController) {
    platform.ready().then(() => {
      let config = {
        apiKey: "AIzaSyDK53rl1RIqNpSs8Uq5GloTlZTa4nrA3SY",
        authDomain: "mobileapp-d55d6.firebaseapp.com",
        databaseURL: "https://mobileapp-d55d6.firebaseio.com",
        projectId: "mobileapp-d55d6",
        storageBucket: "",
        messagingSenderId: "626748666667"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user)=> {
          if (user){
            this.isAuth=true;
            this.content.setRoot(TabsPage);
          }
          else{
            this.isAuth=false;
            this.content.setRoot(AuthComponent, {mode: 'connect'});
          }
        }
      )
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page:any, data?:{}){
    this.content.setRoot(page, data ?data : null);
    this.menuCtrl.close();
  }
  onDiconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

