import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SingleAppareilPage } from '../single-appareil/single-appareil';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html',
})
export class AppareilsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppareilsPage');
  }
  // passing the single appareil name
onLoadAppareil(name:string){
 this.navCtrl.push(SingleAppareilPage, {appareilName:name})
}
}
