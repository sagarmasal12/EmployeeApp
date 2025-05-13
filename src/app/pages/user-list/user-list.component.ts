import { Component } from '@angular/core';
import { AdvFilterComponent, Column } from "../../shared/components/adv-filter/adv-filter.component";

@Component({
  selector: 'app-user-list',
  imports: [AdvFilterComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  columnArray: Column []= [
    {fieldName: 'userName',header:'User Name',inputType:'text'},
    {fieldName: 'password',header:'password',inputType:'text'},
    {fieldName: 'isActive',header:'Status',inputType:'text'},
    {fieldName: 'gender',header:'Gender',inputType:'dropdown',options:['Male','Fe Male']},
    {fieldName: 'city',header:'City',inputType:'dropdown',options:['Pune','Mumbai','Jaipur','Thane']},
    {fieldName: 'role',header:'Role',inputType:'dropdown',options:['Guest','Admin','SuperAdmin']},
  ];

  userData: IUser[] = [
    { userName: "Virat Kohli", password: "vk123", isActive: "true", role: "Guest", gender: "Male", city: "Pune" },
    { userName: "MS Dhoni", password: "msd456", isActive: "false", role: "Admin", gender: "Male", city: "Mumbai" },
    { userName: "Rohit Sharma", password: "rs789", isActive: "true", role: "SuperAdmin", gender: "Male", city: "Jaipur" },
    { userName: "Sachin Tendulkar", password: "st111", isActive: "true", role: "Guest", gender: "Male", city: "Thane" },
    { userName: "KL Rahul", password: "kl555", isActive: "false", role: "Admin", gender: "Male", city: "Pune" },
    { userName: "Mithali Raj", password: "dp23666", isActive: "false", role: "Guest", gender: "Fe Male", city: "Mumbai" },
    { userName: "Jasprit Bumrah", password: "jb777", isActive: "true", role: "Guest", gender: "Male", city: "Mumbai" },
    { userName: "Shafali Verma", password: "ss222", isActive: "true", role: "SuperAdmin", gender: "Fe Male", city: "Jaipur" },
    { userName: "Shikhar Dhawan", password: "sd333", isActive: "false", role: "Admin", gender: "Male", city: "Thane" },
    { userName: "Hardik Pandya", password: "hp444", isActive: "true", role: "Guest", gender: "Male", city: "Pune" },
    { userName: "Deepti Sharma", password: "dp23666", isActive: "false", role: "Admin", gender: "Fe Male", city: "Thane" },
    { userName: "Rishabh Pant", password: "rp888", isActive: "true", role: "SuperAdmin", gender: "Male", city: "Mumbai" },
    { userName: "Ravindra Jadeja", password: "rj999", isActive: "false", role: "Admin", gender: "Male", city: "Jaipur" },
    { userName: "Suryakumar Yadav", password: "sy666", isActive: "true", role: "Guest", gender: "Male", city: "Thane" },
    { userName: "Mohammed Shami", password: "ms444", isActive: "true", role: "Admin", gender: "Male", city: "Pune" },
    { userName: "Axar Patel", password: "ap123", isActive: "false", role: "Guest", gender: "Male", city: "Mumbai" },
    { userName: "Rahul Dravid", password: "rd444", isActive: "true", role: "SuperAdmin", gender: "Male", city: "Jaipur" },
    { userName: "Harmanpreet Kaur", password: "ak666", isActive: "false", role: "Admin", gender: "Fe Male", city: "Thane" },
    { userName: "Harbhajan Singh", password: "hs999", isActive: "true", role: "Guest", gender: "Male", city: "Pune" },
    { userName: "VVS Laxman", password: "vl234", isActive: "true", role: "SuperAdmin", gender: "Male", city: "Mumbai" },
    { userName: "Bhuvneshwar Kumar", password: "bk555", isActive: "false", role: "Admin", gender: "Male", city: "Jaipur" },
    { userName: "Ishant Sharma", password: "is777", isActive: "true", role: "Guest", gender: "Male", city: "Thane" },

  ];
  filterData: IUser [] = [];
  
  constructor() {
    this.filterData = this.userData;
  }

  getFiltereData(filteredData: any[]) {
    debugger;
    this.filterData = filteredData;
  }

}

interface IUser {
  userName: string,
  password: string,
  isActive: string,
  role: string,
  gender: string,
  city: string
}
