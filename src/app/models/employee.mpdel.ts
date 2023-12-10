export enum RoleType {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  HOUSEKEEPING = 'HOUSEKEEPING',
  SECURITY = 'SECURITY',
  WAIT_STAFF = 'WAIT_STAFF',
}

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hireDate: Date;
  role: RoleType;
  salary: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    hireDate: Date,
    role: RoleType,
    salary: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.hireDate = hireDate;
    this.role = role;
    this.salary = salary;
  }
}
