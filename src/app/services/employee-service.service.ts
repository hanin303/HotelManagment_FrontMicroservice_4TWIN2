import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = 'http://localhost:8089/employee';   // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/getAll`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/get/${id}`);
  }

  addEmployee(employee: Employee): Observable<any> { 
    const url = 'http://localhost:8089/employee/add';
    return this.http.post<any>(url, employee); 
  }

  updateEmployee( employee: Employee): Observable<any> {
    const url = `http://localhost:8089/employee/update`;
    return this.http.put(url, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
