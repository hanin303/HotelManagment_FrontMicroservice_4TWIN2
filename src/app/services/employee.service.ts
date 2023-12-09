import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    console.log(  this.keycloakService.getKeycloakInstance().token)
    // console.log(this.keycloakService.getUsername())

    const url = `${this.baseUrl}/employee/getAll`;
    return this.http
      .get<Employee[]>(url, {
        headers: {
          Authorization: `Bearer ${
            this.keycloakService.getKeycloakInstance().token
          }`,
        },
      })
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching', error);
          return throwError(() => error);
        })
      );
  }
}
