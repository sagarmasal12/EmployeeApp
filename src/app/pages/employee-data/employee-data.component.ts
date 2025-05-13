import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-data',
  imports: [FormsModule],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css'
})
export class EmployeeDataComponent implements OnInit {

  @ViewChild('empModal') empModal: ElementRef | undefined;
  employeeList: any[]=[];
  employeeObj: any = {
    "employeeId": 0,
    "firstName": "",
    "lastName": "",
    "email": "",
    "contantNo": "",
    "city": "",
    "address": ""
  }

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllEmployee();
  }
  openModal() {
    if(this.empModal) {
      this.empModal.nativeElement.style.display = 'block';
    }
  }
  closeModal() {
    if(this.empModal) {
      this.empModal.nativeElement.style.display = 'none';
    }
  }

  getAllEmployee() {
    this.http.get("https://localhost:7079/api/employeemaster").subscribe((res:any)=>{
      this.employeeList = res;
    })
  }

  onSave() {
    this.http.post("https://localhost:7079/api/employeemaster",this.employeeObj).subscribe((res:any)=>{
      this.getAllEmployee();
      this.closeModal();
    })
  }

  onUpdate() {
    this.http.put("https://localhost:7079/api/employeemaster/" +this.employeeObj.employeeId ,this.employeeObj).subscribe((res:any)=>{
      this.getAllEmployee();
      this.closeModal();
    })
  }
  deleteEmployee(data: any) {
    const isDelte= confirm("Are you sure want to delete");
    if(isDelte) {
      this.http.delete("https://localhost:7079/api/employeemaster/"+data.employeeId).subscribe((res:any)=>{
        this.getAllEmployee();
      })
    }
  }
  
  editEmployee(data: any) {
    this.openModal();
    this.employeeObj = data;
  }
}
