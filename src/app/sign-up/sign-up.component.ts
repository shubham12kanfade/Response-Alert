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
  imageSrc: string = "";


  constructor(private _formBuilder: FormBuilder ) { 
    
    
  }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      userName: ['', Validators.required],
      emaiId: ['', Validators.required],
      phoneName: ['', Validators.required],
      addressName: ['', Validators.required],
      passwordName: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    // emailSecond: ['', Validators.required],
    // phoneCall: ['', Validators.required],
    // custAddress: ['', Validators.required],
    


  });

  }

  productSelected:boolean = false;

  onSelectProduct(product:any){
    this.productSelected = true;

  }

  


//   readURL(event: Event): void {
//     if ((e.target as HTMLInputElement).files && event.target!.files[0]) {
//         const file = event.target.files[0];

//         const reader = new FileReader();
//         reader.onload = e => this.imageSrc = reader.result;

//         reader.readAsDataURL(file);
//     }
// }

}
