import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Seller } from 'src/app/Model/seller';
import { AccountService } from 'src/app/Services/account.service';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
seller:Seller;
sellerlist:Seller[];


  constructor(private fromBuilder:FormBuilder,private service: AccountService) { }

  ngOnInit() {
    this.registerForm=this.fromBuilder.group({
      // title:['',Validators.required],
      UserName:['',[Validators.required,Validators.pattern('^[a-z]{3,6}$')]],
      SellerId:['',[Validators.required]],
      // lastName:['',Validators.required],
      CompanyName:['',[Validators.required]],
      MobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      EmailId:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      BriefDetails:['',Validators.required],
      PostalAddress:['',Validators.required],
      Website:['',Validators.required],
      GSTIN :['',Validators.required],
      // AcceptTerms:[false,Validators.requiredTrue]




    
    });




  }


  get f()
  {
    return this.registerForm.controls;

  }
  
  onSubmit()
  {
    this.submitted=true;
     this.Register();
    
    //display from values on sucess
    if(this.registerForm.valid)
    {
      alert('sucess!!!!!!')
      console.log(JSON.stringify(this.registerForm.value));
     }
  }
    onReset()
    {

    this.submitted=false;
    this.registerForm.reset();
    }
    Register()
  {
    this.seller=new Seller();
    this.seller.SellerId=this.registerForm.value["SellerId"];
    this.seller.UserName=this.registerForm.value["UserName"];
    this.seller.MobileNo=(this.registerForm.value["MobileNo"]);
    this.seller.CompanyName=this.registerForm.value["CompanyName"];
    this.seller.GSTIN=this.registerForm.value["GSTIN"];
    this.seller.Password=this.registerForm.value["Password"];
    this.seller.PostalAddress=this.registerForm.value["PostalAddress"];
    this.seller.Website=this.registerForm.value["Website"];
    this.seller.EmailId=this.registerForm.value["EmailId"];
    this.seller.BriefDetails=this.registerForm.value["BriefDetails"];
    this.service.SellerRegister(this.seller).subscribe
    (
      res=>
      {
        console.log('Record Added');
      },
      err=>
      {
        console.log(err);
      }
    )
  }

}
