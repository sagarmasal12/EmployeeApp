import { Component, Input, OnInit} from '@angular/core';
import { FormElement } from '../../../model/Employee';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-element',
  imports: [FormsModule],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.css'
})
export class FormElementComponent  implements OnInit {

  @Input() formElements: FormElement[] = [];

  formObject: any = {};

  ngOnInit(): void {
    this.formElements.forEach((element:any )=> {
      this.formObject[element.fieldName] = '';
    });
    debugger;
  }
 


  onSave() {
    const formValue =  this.formObject;
    debugger;
  }
}


