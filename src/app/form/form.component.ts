import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Employee} from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() row: Employee;
  @Output() sendData = new EventEmitter();

  formTitle = 'Add Employee'
  FormData: FormGroup;
  Genders : string[] = ['male', 'female']


  constructor() {
    this.FormData = new FormGroup({
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(4),]),
      age : new  FormControl('',  Validators.required),
      education : new FormControl('',  Validators.required,),
      gender : new FormControl('',  Validators.required,),
      joiningDate : new FormControl('',  Validators.required,)
    });

  }
  ngOnInit(): void {

  }

  get f() { return this.FormData.controls; }

  ngOnChanges() : void {
    if(this.row){
      this.FormData.patchValue(this.row)
    }
  }

  saveData(){
    console.log(this.FormData.value)
    this.sendData.emit(this.FormData.value)
    this.FormData.reset()
    this.FormData.get('name').clearValidators();
    this.FormData.get('name').updateValueAndValidity();
    this.FormData.get('age').clearValidators();
    this.FormData.get('age').updateValueAndValidity();
    this.FormData.get('education').clearValidators();
    this.FormData.get('education').updateValueAndValidity();
    this.FormData.get('joiningDate').clearValidators();
    this.FormData.get('joiningDate').updateValueAndValidity();
  }

}
