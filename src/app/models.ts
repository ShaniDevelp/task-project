export interface Employee {
    id : number,
    name : string,
    age : number,
    education : string,
    gender : string,
    joiningDate : string
}


export const EMPLOYEES : Employee[] = [
    { id: 1.0, name : 'Akabr',     age : 24, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.1, name : 'Khan',      age : 27, education : 'BS' , gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.2, name : 'Faridullah',age : 29, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.3, name : 'Boston',    age : 25, education: 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.4, name : 'Asim',      age : 30, education: 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.5, name : 'Akabr',     age : 24, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.6, name : 'Khan',      age : 27, education : 'BS' , gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.7, name : 'Faridullah',age : 29, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.8, name : 'Boston',    age : 25, education: 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 1.9, name : 'Asim',      age : 30, education: 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.0, name : 'Ahsan',     age : 24, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.1, name : 'Ammar',     age : 27, education : 'BS' , gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.2, name : 'Taqi',      age : 29, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.3, name : 'Ali',       age : 25, education: 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.4, name : 'Touqeer',   age : 30, education: 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.5, name : 'Akabr',     age : 24, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.6, name : 'Khan',      age : 27, education : 'BS' , gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.7, name : 'Faridullah',age : 29, education : 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.8, name : 'Boston',    age : 25, education: 'BS', gender : 'male', joiningDate : '30 June 2021'},
    { id: 2.9, name : 'Asim',      age : 30, education: 'BS', gender : 'male', joiningDate : '30 June 2021'}
];


export interface TableSignal {
    type : 'DeleteEmployee' | 'EditEmployee',
    data : any
}

export const MY_DATE_FORMATS = {
    parse: {
      dateInput: 'DD-MM-YYYY',
    },
    display: {
      dateInput: 'MMM DD, YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    },
};