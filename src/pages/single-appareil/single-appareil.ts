import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.services';


@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  index:number;
  appareil:Appareil;
  constructor(public navParams: NavParams,
    public appareilServices:AppareilsService,
    public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleAppareilPage');
  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }

  a(){
    this.appareil.isOn = !this.appareil.isOn;
    console.log(this.appareil.isOn);
  }
  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil= this.appareilServices.appareilsList[this.index];
    
  }
}
