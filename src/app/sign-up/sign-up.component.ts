import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class SignUpComponent implements OnInit  { 

  firstFormGroup:FormGroup=new FormGroup({})
  secondFormGroup:FormGroup=new FormGroup({})
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ) { 
    
    
  }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

    
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],

  });

  }

}
