import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiRersponse } from '../model/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';


  constructor(private http: HttpClient) { }

  getParentDept() {
    return this.http.get<IApiRersponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment")
  }

  getChildDeptByParentId(id: number) : Observable<IApiRersponse> {
    return this.http.get<IApiRersponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetChildDepartmentByParentId?deptId=" +id)
  }
  getDashbvaordData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "GetDashboard");
  }

}
