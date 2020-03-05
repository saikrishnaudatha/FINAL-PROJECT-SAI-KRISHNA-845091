import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Model/category';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcatgForm:FormGroup;
  submitted=false;
  category:Category;
 // CategoryId:string;
 // CategoryName:string;
  categorylist:Category[];
  //BriefDetails:string;
  
  //item:Category;
  
    constructor(private formBuilder:FormBuilder,private service:AdminService) { }
  
    ngOnInit() {
      this.addcatgForm=this.formBuilder.group({
       
        // CategoryId:['',Validators.required],
       
       CategoryName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,6}$')]],
       BriefDetails:['']
      });
    }
    get f()
    {
      return this.addcatgForm.controls;
    }
    onSubmit()
    {
      this.submitted=true;
      if(this.addcatgForm.valid){
        alert('SUCCESS!! :-)\n\n')
        console.log(JSON.stringify(this.addcatgForm.value));
      }
      this.Add();
  }
 
  onReset()
  {
  this.submitted=false;
  this.addcatgForm.reset();
  }
  Add()
  {

    this.category=new Category();
    
    this.category.categoryId='C'+Math.floor(Math.random()*10000);
  
   
    // this.item.CategoryId=this.addcatgForm.value["CategoryId"];
    this.category.categoryName=this.addcatgForm.value["CategoryName"];
    this.category.briefDetails=this.addcatgForm.value["BriefDetails"];
    console.log(this.category);
    this.service.AddCategories(this.category).subscribe(res=>
      {
        console.log('Category added');
      },err=>{
      console.log(err);
        })
  }
  Delete()
  {
    let id1=this.addcatgForm.value["cid"];
    console.log(id1);
    this.service.DeleteCategories(id1).subscribe(res=>{
      console.log('Category deleted');
    },err=>{
      console.log(err);
    })
     
  }
}
