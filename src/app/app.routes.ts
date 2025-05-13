import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectEmployeesComponent } from './pages/project-employees/project-employees.component';
import { EmployeeDataComponent } from './pages/employee-data/employee-data.component';
import { SingleMultpleComponent } from './pages/single-multple/single-multple.component';
import { SingleMultpleTemplateComponent } from './pages/single-multple-template/single-multple-template.component';
import { UserListComponent } from './pages/user-list/user-list.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path: 'employee',
                component: EmployeeComponent
            },
            {
                path: 'projects',
                component: ProjectComponent
            },
            {
                path: 'project-employee/:eventid',
                component: ProjectEmployeesComponent
            },
            {
                path: 'employee-data',
                component: EmployeeDataComponent
            },
            {
                path: 'single-multple',
                component: SingleMultpleComponent
            },
            {
                path: 'single-multple-template',
                component: SingleMultpleTemplateComponent
            },
            {
                path: 'projectEmp',
                component: ProjectEmployeesComponent
            },
            {
                path: 'users',
                component: UserListComponent
            }
        ]
    }
];
