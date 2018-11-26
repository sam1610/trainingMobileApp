import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'page-appareil-form',
    templateUrl: './appareil-form.html'
})

export class AppareilFormPage implements OnInit {
    appareilForm:FormGroup;
    constructor(
        private formbuilder:FormBuilder
    ) { }

    ngOnInit() {
        this.appareilForm=this.formbuilder.group(
            {
                name:[Validators.required],
                description:this.formbuilder.array([])
            }
        );
     }
     getDescriptionArray(){
         return this.appareilForm.get('description') as FormArray;
     }
}