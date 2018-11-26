import { AppareilFormPage } from './../appareil-form/appareil-form';
import { Component } from '@angular/core';
import { ModalController, MenuController, NavController } from 'ionic-angular';
import { SingleAppareilPage } from '../single-appareil/single-appareil';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.services';


@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html',
})
export class AppareilsPage {

  appareilsList: Appareil[];
  constructor(public modalCtrl: ModalController,
    private appareilSercice: AppareilsService,
    private menuCtrl:MenuController,
    private navCtrl:NavController) {
  }

  // lapage n etait jamais detruite alors ngOnIniy ne fonctionen pas.
  ionViewWillEnter() {
    this.appareilsList = this.appareilSercice.appareilsList.slice();
  }
  //PAsser un object  appreil
  onLoadAppareil(index: number) {
    // console.log(appareil);
    // this.navCtrl.push(SingleAppareilPage, { 'appareil': appareil })
    let modal = this.modalCtrl.create(SingleAppareilPage, { index: index });
    modal.present();
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }
  onNewAppareil(){
    this.navCtrl.push(AppareilFormPage);
  }
}
