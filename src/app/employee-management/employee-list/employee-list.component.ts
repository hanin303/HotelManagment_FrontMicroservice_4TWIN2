import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.mpdel';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private service: EmployeeService) {}
  employeeList: Employee[] = [];
  ngOnInit(): void {
    console.log("entreing f")
     this.service.getAllEmployees().subscribe({
    next:(data) => this.employeeList = data,
    error:(error) => console.log(error)
   });
   console.log(this.employeeList)
  }
}
