import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { AdminService } from 'src/app/Services/admin.service';
import { SubCategory } from 'src/app/Model/sub-category';
import { Category } from 'src/app/Model/category';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  subcategoryForm:FormGroup;
  submitted=false;
  subcategory:SubCategory;
  subcategorylist:SubCategory[];
  categorylist:Category[];
  constructor(private fromBuilder:FormBuilder,private service: AdminService) { this.GetCategories(); }



  
  ngOnInit() {
    this.subcategoryForm=this.fromBuilder.group({
     
      SubcategoryName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}$')]],
      // CategoryId:['',[Validators.required,Validators.pattern("^[0-9]{1,5}$")]],
      GST:['',[Validators.required,Validators.minLength(4)]],
      BriefDetails:['',Validators.required],
      CategoryName:['']

    
    });
   
  }


  get f()
  {
    return this.subcategoryForm.controls;

  }
  
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.subcategoryForm.valid)
    {
      alert('sucess!!!!!!')
      console.log(JSON.stringify(this.subcategoryForm.value));
    }
    this.Add();
  }
    onReset()
    {

    this.submitted=false;
    this.subcategoryForm.reset();
    }

   GetCategories()
   {
     this.service.GetCategories().subscribe(res=>
      {
        this.categorylist=res;
        console.log(this.categorylist);
      },
      err=>
      {
        console.log(err);
      })
    }
   
   
    Add()
    {

      this.subcategory=new SubCategory();
      this.subcategory.subcategoryId='SC'+Math.floor(Math.random()*100);
      this.subcategory.subcategoryName=this.subcategoryForm.value["SubcategoryName"];
      this.subcategory.categoryId=(this.subcategoryForm.value["CategoryName"]);
      this.subcategory.briefDetails=this.subcategoryForm.value["BriefDetails"];
      this.subcategory.gst=this.subcategoryForm.value["GST"];
      this.service.AddSubCategories(this.subcategory).subscribe 
      (
        res=>
        {
          console.log(this.subcategory)
          console.log('Record Added');
        },
        err=>
        {
          console.log(err);
        }
      )
    }
  
  }