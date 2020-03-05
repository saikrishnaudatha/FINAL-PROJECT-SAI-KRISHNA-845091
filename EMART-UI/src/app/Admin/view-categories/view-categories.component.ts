import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Model/category';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  viewcatForm:FormGroup;
  viewcatList:Category[];
  category: Category;
  
  constructor(private formbuilder:FormBuilder,private service:AdminService) { 
    
        
  }

  View()
  {
    this.service.ViewCategories().subscribe(res=>
      {
        this.viewcatList=res;
        console.log(this.viewcatList)
      },
      err=>{
        console.log(err);
      })
  }
  

  ngOnInit() {
  
    this.viewcatForm=this.formbuilder.group({
      
       CategoryId:[''],
       CategoryName:[''],
       BriefDetails:[''],
       
           // CategoryName:[''],
 // CategoryId:['',[Validators.required,Validators.pattern("^[0-9]{1,5}$")]],
   });
   this.View();
 }

 GetCatById(catid:string)
 {

   this.service.GetCatById(catid).subscribe 
      (
        res=>
        {
          this.category=res;
          console.log("get");
          console.log(this.category);
          console.log('Id Found');
          this.viewcatForm.setValue(
            {
              CategoryId:this.category.categoryId,
              CategoryName:this.category.categoryName,
              BriefDetails:this.category.briefDetails,
              
            }
          )
        },
        err=>
        {
          console.log(err);
        }
      )
      // this.Edit(this.category);
    }
 

 Edit()
  {
    let catobj=new Category();  
    console.log(catobj);
    catobj.categoryId=this.viewcatForm.value['CategoryId'];
    catobj.categoryName=this.viewcatForm.value['CategoryName'];
    // catobj.CategoryId=this.viewcatForm.value['CategoryId'];
    catobj.briefDetails=this.viewcatForm.value['BriefDetails'];
    this.service.EditCategories(catobj).subscribe(res=>{
        this.category=res;
        console.log(this.category);
        this.View();
         
  })
  
    }
   

    Delete(catid:string)
    {
      this.service.DeleteCategories(catid).subscribe
  (
    res=>
    {
      console.log('Record Deleted');
      alert("Do u want to delete");
      alert("Record Deleted");
    
    },
    err=>
    {
      console.log(err);
    }
  )
  this.View(); 
}
    }
  