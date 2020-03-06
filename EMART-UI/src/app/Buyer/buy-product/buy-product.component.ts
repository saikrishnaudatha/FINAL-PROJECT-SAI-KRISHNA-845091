import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from 'src/app/Model/transaction-history';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Model/items';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  transForm:FormGroup;
  transactionhistory:TransactionHistory;
  itemlist:Items[];
  item:Items
 
  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {

    this.item=JSON.parse(localStorage.getItem('item'));
  console.log(this.item);
  console.log(this.item.itemId);
  this.transForm=this.formbuilder.group({
     
      
    numberofitems:[''],
    transactiontype:[''],

  
  });
  

  }

  onSubmit()
{
  this.transactionhistory=new TransactionHistory();
  this.transactionhistory.id='I'+Math.round(Math.random()*999);
  this.transactionhistory.Transactionid='T'+Math.round(Math.random()*999);
  this.transactionhistory.buyerid=localStorage.getItem('buyerid');
  this.transactionhistory.selletid=this.item.sellerId;
  this.transactionhistory.numberofitems=this.transForm.value["numberofitems"];
  this.transactionhistory.itemid=this.item.itemId;
  this.transactionhistory.transactiontype=this.transForm.value["transactiontype"]
  this.transactionhistory.datetime=new Date();
  this.transactionhistory.remarks=this.item.remarks;
     console.log(this.transactionhistory);
     this.service.BuyItem(this.transactionhistory).subscribe(
       res=>{
       console.log("Transaction is Successfull");
       alert('Ordered Successfully');
     })

   

}

}
