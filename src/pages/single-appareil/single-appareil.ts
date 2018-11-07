import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  obj :{
    name:String,
    description:String[]
  };

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleAppareilPage');
  }
  ngOnInit() {
    this.obj = this.navParams.get('appareil')
  }
}
