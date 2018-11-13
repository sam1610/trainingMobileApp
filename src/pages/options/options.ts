import { MenuController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-options',
  templateUrl: './options.html',
})
export class OptionsPage {
  constructor(private menuCtrl:MenuController){}

  onToggleMenu(){
    this.menuCtrl.open();
  }

  
 

}
