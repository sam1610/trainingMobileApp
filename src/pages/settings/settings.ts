import { Component } from "@angular/core"
import { AlertController } from "ionic-angular";
@Component({
    selector: "page-settings",
    templateUrl: "settings.html"
})
export  class SettingsPage{
    constructor( private alertCtl:AlertController){}

    onToggleLight(){
        let alert=this.alertCtl.create(

            {
                title:"are you sure you want to carry ON",
                subTitle:"this action will switch ON or Off devices",
                buttons:[
                   { text:"Cancel",
                    role:"cancel"},
                    {
                        text:"Confirm",
                        handler:()=>console.log("Confirmed")
                    }
                ]
            }
        );
        // present the alert to users 
        alert.present();



    }
    


}