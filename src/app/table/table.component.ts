import { Component, OnInit } from '@angular/core';
import {Employee} from '../models';
import { Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit  {

	@Output() ActiveRow = new EventEmitter<Employee>();
	@Output() NewData = new EventEmitter<Employee>()

	data : Employee[] = [];
	selectedRow: Employee;
	limit : number
	oFFSet : number
	newData : any


	constructor(private employeeService : EmployeeService) {
		this.selectedRow = null;
		this.limit = 10
		this.oFFSet = 0
	}

	ngOnInit(): void {
		this.getEmployees()
		this.showFilterData()
		this.sendNewData()
	}

	getEmployees(){
	  this.data = this.employeeService.getEmployees();
	  console.log(this.data)
	}

	showFilterData(){
		this.newData=this.data.filter((val,idx)=>{
			if(idx < this.limit) return val
			return null
		})
	}

	selectRow(obj: Employee) {
		if(this.selectedRow === obj){
			this.selectedRow = null
		} else {
			this.selectedRow = obj
		}
	}

	sendNewData(){
		this.NewData.emit(this.newData)
	}

	editRow(){
		this.ActiveRow.emit(this.selectedRow)
	}

	deleteRow(){
		const findrec = this.newData.findIndex((rec) => rec.id === this.selectedRow.id)
		this.newData.splice(findrec, 1);
		this.selectedRow = null
	}
	
	onPageChange(ev : PageEvent){
		this.limit = ev.pageSize;
		this.oFFSet = (ev.pageSize  *  (ev.pageIndex + 1));
		this.filterData()
		this.sendNewData()
	}

	filterData(){
		this.newData = this.data.filter((obj, idx)=>{
			if((idx) > (this.oFFSet - (this.limit + 1)) && (idx < this.oFFSet && (idx) < (this.data.length))){
				return obj ;
			} return null
		})
	}
}
