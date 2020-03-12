import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Model/items';
import { Category } from 'src/app/Model/category';
import {combineLatest} from 'rxjs';
import {Router} from '@angular/router';
import { SellerService } from 'src/app/Services/seller.service';
import { SubCategory } from 'src/app/Model/sub-category';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
itemForm:FormGroup;
  submitted=false;
 item:Items;
 name:string;
 image:string;
 itemlist:Items[];
  categorylist:Category[];
subcategorylist:SubCategory[];
catid:string;
  constructor(private fromBuilder:FormBuilder,private service: SellerService,private route:Router)
   {
     this.service.GetCategories().subscribe(res=>{
     this.categorylist=res;
     console.log(this.categorylist);

    //  this.service.GetSubCategories(this.catid).subscribe(res=>{
    //   this.subcategorylist=res;
    //   console.log(this.categorylist);
     
    // })
   }   

   )
  
  }

  ngOnInit() {



    this.itemForm=this.fromBuilder.group({
     
      ItemId:['',[Validators.required]],
    //SellerId:['',[Validators.required]],
    
      //SellerName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}$')]],
      ItemName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}$')]],
      // CategoryId:['',[Validators.required,Validators.pattern("^[0-9]{1,5}$")]],
     Price:['',[Validators.required]],
      Description:['',Validators.required],
      CategoryId:[''],
      CategoryName:[''],
      StockNumber:['',Validators.required],
      Remarks:[''],
      SubcategoryId:[''],
     SubcategoryName:['']
    

  });

}

// Upload()
// {
//   this.item=new Items();
//   this.item.itemName=this.name;
//   this.item.image=this.image;
//   console.log(this.item)
//   this.itemlist.push(this.item);
//   console.log(this.item);

// }



get f()
  {
    return this.itemForm.controls;

  }
  
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.itemForm.valid)
    {
      alert('sucess!!!!!!')
      console.log(JSON.stringify(this.itemForm.value));
    }
    this.Add();
  }
    onReset()
    {

    this.submitted=false;
    this.itemForm.reset();
    }


  //   GetCategories()
  //  {
  //    this.service.GetCategories().subscribe(res=>
  //     {
  //       this.categorylist=res;
  //       console.log(this.categorylist);
  //     },
  //     err=>
  //     {
  //       console.log(err);
  //     })
  //   }




    GetSub()
   {
     let id=this.itemForm.value["CategoryName"];
     console.log(id);
     
     this.service.GetSubCategories(id).subscribe(res=>
      {
        this.subcategorylist=res;
        console.log(this.subcategorylist);
      },
      err=>
      {
        console.log(err);
      })
    }
    Add()
    {

      this.item=new Items();
      this.item.itemId='I'+Math.floor(Math.random()*1000);
      this.item.sellerId=localStorage.getItem("SellerId");
      this.item.image=this.image;
      this.item.itemName=this.itemForm.value["ItemName"];
      this.item.categoryId=(this.itemForm.value["CategoryName"]);
      this.item.subcategoryId=(this.itemForm.value["SubcategoryName"]);
      this.item.remarks=this.itemForm.value["Remarks"];
         
        this.item.stockNumber=this.itemForm.value["StockNumber"];
      this.item.description=this.itemForm.value["Description"];
      this.item.price=this.itemForm.value["Price"];
      console.log(this.item);
      this.service.AddItem(this.item).subscribe 
      (
        res=>
        {
          console.log(this.item)
          console.log('Record Added');
        },
        err=>
        {
          console.log(err);
        }
      )
    }
fileEvent(event){
  this.image=event.target.files[0].name;
}

  
  }
  


