import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/settings/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any =TabsPage;
  optionsPage:any = OptionsPage;

  @ViewChild('content') content :NavController;
  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl:MenuController) {
    platform.ready().then(() => {
    
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page:any){
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

