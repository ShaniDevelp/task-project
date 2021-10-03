import { Component, OnInit } from '@angular/core';
import { Employee,} from '../models';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  data : Employee[];
  row : Employee

  constructor() { 
    this.row = null;
  }

  ngOnInit(): void {
  }

  AcceptData(event : any){
    this.data = event
  }

  closeform(value: Employee){
    if(this.row){
      this.replaceRow(value)
    } else{
      this.data.push(value)
    }
  }

  replaceRow(value : Employee){
    const findrec = this.data.findIndex((rec) => rec.id === this.row.id)
    this.data[findrec] = value;
    this.row = null
  }


  onActiveRow(value : Employee) {
    this.row = value; 
  }

}
