import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Model/buyer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-view-buyer-profile',
  templateUrl: './view-buyer-profile.component.html',
  styleUrls: ['./view-buyer-profile.component.css']
})
export class ViewBuyerProfileComponent implements OnInit {

  viewprofileForm:FormGroup;
  submitted=false;
item:Buyer;
itemlist:Buyer[];
  constructor(private formbuilder:FormBuilder,private service:BuyerService) { 
    
  let id1=localStorage.getItem('sellerid');
  console.log(id1);
  this.service.ViewProfile(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.viewprofileForm.patchValue({
      buyerId:this.item.buyerId,
      userName:this.item.userName,
      password:this.item.password,
      // companyName:this.item.companyName,
      // gstin:this.item.gstin,
      // briefDetails:this.item.briefDetails,
      // postalAddress:this.item.postalAddress,
      emailId:this.item.emailId,  
      mobileNo:this.item.mobileNo,
      // website:this.item.website
    })
  })
  }

  ngOnInit() {
    this.viewprofileForm=this.formbuilder.group({
       buyerId:['',Validators.required],
       userName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,6}$')]], 
      //  companyName:[''],
      //  gstin:[''],
      //  briefDetails:[''],
      //  postalAddress:[''],
       mobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
       emailId:['',[Validators.required,Validators.email]],
      //  website:[''],
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
  this.item=new Buyer();
  console.log(this.item);
  this.item.buyerId=this.viewprofileForm.value["buyerId"];
  this.item.userName=this.viewprofileForm.value["userName"];
  this.item.password=this.viewprofileForm.value["password"];
  this.item.emailId=this.viewprofileForm.value["emailId"];
  this.item.mobileNo=this.viewprofileForm.value["mobileno"];
  // this.item.companyName=this.viewprofileForm.value["companyName"];
  // this.item.gstin=this.viewprofileForm.value["gstin"];
  // this.item.briefDetails=this.viewprofileForm.value["briefDetails"];
  // this.item.postalAddress=this.viewprofileForm.value["postalAddress"];
  // this.item.website=this.viewprofileForm.value["website"];
// this.item.createdDateTime=this.viewprofileForm.value["createdDateTime"];

  console.log(this.item);
//   this.service.EditProfile(this.item).subscribe(res=>
//     {
//       console.log('Record Updated');
//     })
// }

}
}