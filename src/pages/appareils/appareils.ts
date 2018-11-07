import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SingleAppareilPage } from '../single-appareil/single-appareil';
@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html',
})
export class AppareilsPage {

  appareilList = [
    {
      name: "Laundry Machine",
      description: [
        'dexript 1 ',
        'Dessscription 2'
      ]
    },
    {
      name: "Television ",
      description: [
        'dexript 3 ',
        'Dessscription 4'
      ]
    },
    {
      name: "Ordinateur",
      description: [
        'dexript 5 ',
        'Dessscription 6'
      ]
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppareilsPage');
  }
  //PAsser un object  appreil
  onLoadAppareil(appareil) {
    console.log(appareil);
    this.navCtrl.push(SingleAppareilPage, { 'appareil': appareil })
  }
}
