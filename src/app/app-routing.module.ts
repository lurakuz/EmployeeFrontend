import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AuthGuard } from './components/authentication/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard]},
  {path: 'create-employee', component: CreateEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
