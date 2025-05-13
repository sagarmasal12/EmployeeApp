import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-multple',
  imports: [ReactiveFormsModule],
  templateUrl: './single-multple.component.html',
  styleUrl: './single-multple.component.css'
})
export class SingleMultpleComponent {

  employeeForm: FormGroup = new FormGroup({});
  
  constructor(){
    this.initializeForm();
  }

  initializeForm() {
    this.employeeForm =  new FormGroup({
      EmpId :new FormControl(0),
      Name: new FormControl("",[Validators.required]), 
      Designation: new FormControl(""),
      MockEmpRelatives: new FormArray([])
    })
    this.createFamilyForm();
  }

  get familyRelative(): FormArray {
    return this.employeeForm.controls['MockEmpRelatives'] as FormArray;
  } 
  getFamilyFormByIndex(index: number) {
    const formArray =  this.employeeForm.controls['MockEmpRelatives'] as FormArray;
    return formArray.controls[index];
  } 
  createFamilyForm() { 
    const familyForm = new FormGroup({
      RelativeId: new FormControl(0),
      Name: new FormControl("",[Validators.required]),
      Relation: new FormControl(""),
      Age: new FormControl(""),
      EmpId: new FormControl(0)
    });
   const formArray =  this.employeeForm.controls['MockEmpRelatives'] as FormArray;
   formArray.push(familyForm); 
  }

  onSave() {
    const formValue = this.employeeForm.value;
    debugger;
  }

}
