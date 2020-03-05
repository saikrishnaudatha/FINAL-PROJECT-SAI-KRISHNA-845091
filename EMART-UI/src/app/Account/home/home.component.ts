import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  id:String;
  pwd:string;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      id:['',Validators.required],
      pwd:['',Validators.required]
    });
  }
  onSubmit()
  {
  this.submitted=true;
  if(this.loginForm.invalid)
  {
    return;
  }
  else
  {
  alert("Form is Validated");
  console.log(this.loginForm.value)//return java script object
  console.log(JSON.stringify(this.loginForm.value))//return json object
  console.log(this.loginForm.value["uname"])
  console.log(this.loginForm.value["pwd"])
  }
}
get f()
{
  return this.loginForm.controls;
}
onReset()
{
this.submitted=false;
this.loginForm.reset();
}
}