import { Injectable } from '@angular/core';
import {Employee, EMPLOYEES} from './models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[]{
    return EMPLOYEES;
  }
  
}
