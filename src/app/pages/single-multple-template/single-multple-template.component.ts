import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-multple-template',
  imports: [FormsModule],
  templateUrl: './single-multple-template.component.html',
  styleUrl: './single-multple-template.component.css'
})
export class SingleMultpleTemplateComponent {

  employeeObj: any = {
    "EmpId": 0,
    "Name":"",
    "ContactNo":"",
    "Email":"",
    "City":"",
    "State":"",
    "PinCode":"",
    "Designation":"",
    "MockEmpRelatives": [ ]
  }
  familyObj: any = {
    "RelativeId": 0,
    "Name":"",
    "Relation":"",
    "Age": 0,
    "EmpId": 0
  }

  constructor() {
     
  }

  onAdd() {
    debugger;
    const strOIbj = JSON.stringify(this.familyObj);
    const parseObj =  JSON.parse(strOIbj)

    this.employeeObj.MockEmpRelatives.push(parseObj)
  }
  saveEmnployee() {
    const formValue =  this.employeeObj;
    debugger;
  }
}
