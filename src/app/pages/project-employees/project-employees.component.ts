import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  FormElementComponent } from '../../shared/components/form-element/form-element.component';
import { FormElement } from '../../model/Employee';
 
@Component({
  selector: 'app-project-employees',
  imports: [FormElementComponent],
  templateUrl: './project-employees.component.html',
  styleUrl: './project-employees.component.css'
})
export class ProjectEmployeesComponent {

  departmentFieldList: FormElement [] = [
    {fieldName: 'deptId',inputType:'text',label:'Deptment Id'},
    {fieldName: 'deptName',inputType:'text',label:'Deptment Name'},
    {fieldName: 'deptLogo',inputType:'text',label:'Department Logo'},
    {fieldName: 'isActive',inputType:'checkbox',label:'Is Active'}
  ];

  designationFiledList: FormElement [] = [
    {fieldName: 'designationId',inputType:'text',label:'Designation Id'},
    {fieldName: 'designationName',inputType:'text',label:'Designation Name'} 
  ];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(res=>{
      debugger;
    })
  }
  

 

}
