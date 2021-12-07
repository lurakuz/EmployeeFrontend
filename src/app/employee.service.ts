import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDto } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<EmployeeDto[]>{
    return this.httpClient.get<EmployeeDto[]>(this.baseURL);
  }

  createEmployee(employee: EmployeeDto): Observable<Object>{
    return this.httpClient.post(this.baseURL, employee);
  } 

  getEmployeeById(id:number): Observable<EmployeeDto>{
    return this.httpClient.get<EmployeeDto>(this.baseURL+"/"+id);
  }

  updateEmployee(id:number, employee: EmployeeDto): Observable<Object>{
    return this.httpClient.put(this.baseURL+"/"+id, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

}
