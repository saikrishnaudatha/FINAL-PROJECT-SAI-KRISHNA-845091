import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from 'src/app/Model/transaction-history';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Model/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  buyerform:FormGroup;
  item:Items;
  pobj:TransactionHistory;
    constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }
  
    ngOnInit() {
  this.buyerform=this.formbuilder.group({
    transactionType:[''],
    cardNumber:[''],
    cvv:[''],
    edate:[''],
    name:[''],
    dateTime:[''],
    numberOfItems:[''],
    remarks:[''],
    itemName:[''],
    price:[''],
    image:['']
  })
  this.item=JSON.parse(localStorage.getItem('item'));
  console.log(this.item);
  console.log(this.item.itemId);
    }
  onSubmit()
  {
    this.pobj=new TransactionHistory();
    this.pobj.id='T'+Math.round(Math.random()*999);
    this.pobj.Transactionid=this.pobj.id;
    this.pobj.buyerid=localStorage.getItem('buyerId');
    this.pobj.sellerid=this.item.sellerId;
    this.pobj.numberofitems=this.buyerform.value["numberOfItems"];
    this.pobj.itemid=this.item.itemId;
    this.pobj.itemName=this.item.itemName;
    this.pobj.image=this.item.image;
    this.pobj.price=this.item.price;
    this.pobj.transactiontype=this.buyerform.value["transactionType"]
       this.pobj.datetime=this.buyerform.value["dateTime"];
       this.pobj.remarks=this.buyerform.value["remarks"];
       console.log(this.pobj);
       this.service.BuyItem(this.pobj).subscribe(res=>{
         console.log("Purchase was Sucessfull");
         alert('Purchase Done Successfully');
       })
  
  }
    
  
  }