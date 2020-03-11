import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { TransactionHistory } from 'src/app/Model/transaction-history';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  buyerid:string;
  transobj:TransactionHistory;
  translist:TransactionHistory[];
  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router)
   { 
    this.buyerid= localStorage.getItem('buyerId');
    this.service.PurchaseHistory(this.buyerid).subscribe(res=>
      {
        this.transobj=res;
        console.log(this.transobj)
      },
      err=>{
        console.log(err);
      })
   }

  ngOnInit() {
  }

}
