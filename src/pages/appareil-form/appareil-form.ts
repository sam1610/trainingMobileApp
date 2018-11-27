import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AppareilsService } from './../../services/appareils.services';
import { Appareil } from './../../models/Appareil';

@Component({
    selector: 'page-appareil-form',
    templateUrl: './appareil-form.html'
})

export class AppareilFormPage implements OnInit {
    appareilForm:FormGroup;
    constructor(
        private formbuilder:FormBuilder,
        private appareilService:AppareilsService,
        private navCtrl:NavController
    ) { }

    ngOnInit() {
        this.appareilForm=this.formbuilder.group(
            {
                name:['', Validators.required],
                description:this.formbuilder.array([])
            }
        );
     }
     getDescriptionArray(){
         return this.appareilForm.get('description') as FormArray;
     }
     onAddDescription(){
         let newControl= this.formbuilder.control('');
         this.getDescriptionArray().controls.push(newControl);
     }
     onRemoveDescription(index:number){
         this.getDescriptionArray().removeAt(index);
     }

     onSubmit(){
         let newAppareil= new Appareil(
             this.appareilForm.get('name').value);
             for ( let control of this.getDescriptionArray().controls){
                 newAppareil.description.push(control.value)
             }
             this.appareilService.addAppareil(newAppareil);
             this.navCtrl.pop();
         
     }
}