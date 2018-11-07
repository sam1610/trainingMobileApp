import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  name: string;

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleAppareilPage');
  }
  ngOnInit() {
    this.name = this.navParams.get('appareil')
  }
}
