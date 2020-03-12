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

  itemForm:FormGroup;
  submitted=false;
buyer:Buyer;
 buyerlist:Buyer[];
 
  constructor(private fromBuilder:FormBuilder,private service:BuyerService) {
    let sid= localStorage.getItem('buyerId')
    console.log(sid);
 this.service.ViewProfile(sid).subscribe(res=>
  {
    this.buyer=res;
    console.log("get");
    console.log(this.buyer);
    console.log('Id Found');
    //console.log(res);
    this.itemForm.patchValue(
      {
       
      buyerId:localStorage.getItem('buyerId'),
      userName:this.buyer.userName,
        password:this.buyer.password,
      emailId:this.buyer.emailId,
       mobileNo:this.buyer.mobileNo,
       
        
      }
    )
  },
  err=>
  {
    console.log(err);
  }
)

   

   }

  ngOnInit() {
   
    this.itemForm=this.fromBuilder.group({
       buyerId:[''],
        userName:[''],
      password:[''],
    
      emailId:[''],
      mobileNo:[''],
      CreatedDateTime:['']
  
    });
  }











  onSubmit()
  {
    this.submitted=true;
   
}
get f()
{
  return this.itemForm.controls;
}
onReset()
{
this.submitted=false;
this.itemForm.reset();
}






EditProfile()
{
  this.buyer=new Buyer();
  console.log(this.buyer);
  this.buyer.buyerId=localStorage.getItem('buyerId');
  this.buyer.userName=this.itemForm.value["userName"];
  this.buyer.password=this.itemForm.value["password"];
  this.buyer.emailId=this.itemForm.value["emailId"];
  this.buyer.mobileNo=this.itemForm.value["mobileNo"];

this.buyer.createdDateTime=new Date();
  
// this.item.createdDateTime=this.itemForm.value["createdDateTime"];

  console.log(this.buyer);
  this.service.EditProfile(this.buyer).subscribe(res=>
    {
      console.log('Record Updated');
      alert('updated succefully');
    })
}
}
