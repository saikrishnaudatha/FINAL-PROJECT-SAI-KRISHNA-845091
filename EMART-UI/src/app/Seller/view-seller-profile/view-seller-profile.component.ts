import { Component, OnInit } from '@angular/core';
import { ViewItemsComponent } from '../view-items/view-items.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/Model/seller';
import { Items } from 'src/app/Model/items';

@Component({
  selector: 'app-view-seller-profile',
  templateUrl: './view-seller-profile.component.html',
  styleUrls: ['./view-seller-profile.component.css']
})
export class ViewSellerProfileComponent implements OnInit {
   viewprofileForm:FormGroup;
  submitted=false;
item:Seller;
itemlist:Seller[];
  constructor(private formbuilder:FormBuilder,private service:SellerService) { 
    
  let id1=localStorage.getItem('sellerid');
  console.log(id1);
  this.service.ViewProfile(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.viewprofileForm.patchValue({
      sellerId:this.item.sellerId,
      userName:this.item.userName,
      password:this.item.password,
      companyName:this.item.companyName,
      gstin:this.item.gstin,
      briefDetails:this.item.briefDetails,
      postalAddress:this.item.postalAddress,
      emailId:this.item.emailId,  
      mobileNo:this.item.mobileNo,
      website:this.item.website
    })
  })
  }

  ngOnInit() {
    this.viewprofileForm=this.formbuilder.group({
       sellerId:['',Validators.required],
       userName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,6}$')]], 
       companyName:[''],
       gstin:[''],
       briefDetails:[''],
       postalAddress:[''],
       mobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
       emailId:['',[Validators.required,Validators.email]],
       website:[''],
       password:['',[Validators.required,Validators.minLength(6)]],
      //  createdDateTime:['']
     

    });
  }
  onSubmit()
  {
    this.submitted=true;
   
}
get f()
{
  return this.viewprofileForm.controls;
}
onReset()
{
this.submitted=false;
this.viewprofileForm.reset();
}
EditProfile()
{
  this.item=new Seller();
  console.log(this.item);
  this.item.sellerId=this.viewprofileForm.value["buyerId"];
  this.item.userName=this.viewprofileForm.value["userName"];
  this.item.password=this.viewprofileForm.value["password"];
  this.item.emailId=this.viewprofileForm.value["emailId"];
  this.item.mobileNo=this.viewprofileForm.value["mobileno"];
  this.item.companyName=this.viewprofileForm.value["companyName"];
  this.item.gstin=this.viewprofileForm.value["gstin"];
  this.item.briefDetails=this.viewprofileForm.value["briefDetails"];
  this.item.postalAddress=this.viewprofileForm.value["postalAddress"];
  this.item.website=this.viewprofileForm.value["website"];
// this.item.createdDateTime=this.viewprofileForm.value["createdDateTime"];

  console.log(this.item);
//   this.service.EditProfile(this.item).subscribe(res=>
//     {
//       console.log('Record Updated');
//     })
// }

}
}