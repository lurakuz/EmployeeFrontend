import { Component, OnInit } from '@angular/core';
import { EmployeeDto } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: EmployeeDto = new EmployeeDto();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=> {
      console.log(data);
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
