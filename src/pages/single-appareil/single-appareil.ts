import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  obj :{
    name:String,
    description:String[]
  };

  constructor(public navParams: NavParams,private viewCtrl:ViewController) {
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    this.obj = this.navParams.get('appareil')
  }
}
