import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SingleAppareilPage } from '../single-appareil/single-appareil';
@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html',
})
export class AppareilsPage {

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppareilsPage');
  }
  //PAsser un object  appreil
  onLoadAppareil(appareil) {
    // console.log(appareil);
    // this.navCtrl.push(SingleAppareilPage, { appareil: appareil })
    let modal= this.modalCtrl.create(SingleAppareilPage, {appareil:appareil});
    modal.present();
  }
}
