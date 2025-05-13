import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Employee, IApiRersponse, IChildDept, IParentDept } from '../../model/Employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { NgClass, NgIf } from '@angular/common';
import { MyTableComponent, TableColumn } from '../../shared/components/my-table/my-table.component';
import { Router, RouterLink } from '@angular/router';
import { FilterComponent } from '../../shared/components/filter/filter.component';

interface ColumnConfig {
  fieldName: string; // Name of the field to filter
  displayName: string; // Column name to display in the filter
  inputType: 'text' | 'dropdown'; // Type of input
  options?: string[]; // Options for dropdown if inputType is dropdown
}

@Component({
  selector: 'app-employee',
  imports: [FormsModule,FilterComponent,NgIf],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  columns: ColumnConfig[] = [
    { fieldName: 'employeeName', displayName: 'Name', inputType: 'text' },
    { fieldName: 'contactNo', displayName: 'Email', inputType: 'text' },
    { fieldName: 'gender', displayName: 'gender', inputType: 'dropdown', options: ['Male', 'Female' ]},
  ];
  showFilter = false;
  columnList: TableColumn[] = [
    {
      fieldName: 'employeeName',
      headerName: 'Employee Name',
    }, {
      fieldName: 'contactNo',
      headerName: 'Contact No'
    },
    {
      fieldName: 'emailId',
      headerName: 'Email-Id '
    },
    {
      fieldName: 'deptId',
      headerName: 'Dept Id '
    }

  ];

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
  updateFilteredData(filteredData: any[]) {
    this.filteredData = filteredData;
  }
  onFilterApplied(filter: { column: string; value: string }) {
    this.filteredData = this.employeeList.filter((item:any) =>
      item[filter.column]?.toString().toLowerCase().includes(filter.value.toLowerCase())
    );
  }

  parentDeptList: IParentDept[] = [];
  childDeptList: IChildDept[] = [];
  deptId: number = 0;

  employeeObj: Employee = new Employee();
  employeeList: Employee[] = [];
  filteredData: Employee [] =[];
  masterService = inject(MasterService);
  private empService = inject(EmployeeService);
  router = inject(Router);

  isSidePanelOpen = signal<boolean>(false);

  ngOnInit(): void {
    this.getParentDeptList();
    this.getEmployees();
  }

  navigateToProject() {
    this.router.navigateByUrl("/project-employee/"+123)
  }

  addNew() {
    this.isSidePanelOpen.set(true);
  }
  close() {
    this.isSidePanelOpen.set(false);
  }

  onEdit(obj: Employee) {
    debugger;
    this.employeeObj = obj;
  }

  getEmployees() {
    this.empService.getEmployes().subscribe((res: Employee[]) => {
      this.employeeList = res;
      this.filteredData  = res;
    })
  }

  getParentDeptList() {
    this.masterService.getParentDept().subscribe((res: IApiRersponse) => {
      this.parentDeptList = res.data;
    })
  }
  onDeptChage() {
    this.masterService.getChildDeptByParentId(this.deptId).subscribe((res: IApiRersponse) => {
      this.childDeptList = res.data;
    })
  }

  onSaveEmp() {
    debugger;
    this.empService.creatNewEmployee(this.employeeObj).subscribe((res: Employee) => {
      debugger;
      alert("Employee Creation Success")
      this.getEmployees();
    }, error => {
      alert('Error Formm API')
    })
  }

  onUpdateEmp() {
    this.empService.updateEmployee(this.employeeObj).subscribe((res: Employee) => {
      debugger;
      alert("Employee Update Success")
      this.getEmployees();
    }, error => {
      alert('Error Formm API')
    })
  }


  onDelete(data: any) {
    debugger;
    const result = confirm("Are You Sure want ot Delete");
    if (result) {
      this.empService.deleteEmpById(data.employeeId).subscribe((res: Employee) => {
        debugger;
        alert("Employee Delete Success")
        this.getEmployees();
      }, error => {
        alert('Error Formm API')
      })
    }

  }
}
