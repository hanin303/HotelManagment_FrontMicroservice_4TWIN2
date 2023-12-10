import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee } from 'src/app/models/employee.mpdel';
import { OAuthService } from 'angular-oauth2-oidc';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8090';

  constructor(
    private http: HttpClient,
    private keycloakService: KeycloakService
  ) {}

  addEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/employee/add`;
    return this.http.post<Employee>(url, employee);
  }

  getAllEmployees(): Observable<Employee[]> {
    const url = `${this.baseUrl}/employee/getAll`;
    const token = this.keycloakService.getKeycloakInstance().token;
  
    return this.http.get<Employee[]>(url, {
      headers: { Authorization: `Bearer ${token}` },
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching employees:', error);
  
        if (error.status === 401) {
          console.log('Unauthorized. Token:', token);
        }
  
        return throwError(() => error);
      })
    );
  }
  
}
