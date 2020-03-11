import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Model/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemForm:FormGroup;
item:Items;
itemlist:Items[];
itemName:string;
cartobj:Cart;

  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
    this.itemForm=this.builder.group({
       itemName:[''],
    
    });

  }
  Search()
  {
     this.itemName=this.itemForm.value["itemName"];
    this.service.SearchItems(this.itemName).subscribe(res=>{
        this.itemlist=res;
        console.log(this.itemlist);
  })
}

Buy(item:Items)
{
  
  console.log(item);
localStorage.setItem('item',JSON.stringify(item));
this.route.navigateByUrl('/buyer/buy-product')
}


Add(item:Items)
{
//let bid=localStorage.getItem('buyerId')
this.cartobj=new Cart();
this.cartobj.cartId='CT'+Math.round(Math.random()*999);
this.cartobj.sellerId=item.sellerId;
//this.cartobj.buyerId=
this.cartobj.categoryId=item.categoryId;
this.cartobj.subcategoryId=item.subcategoryId;
this.cartobj.image=item.image;
this.cartobj.itemId=item.itemId;
this.cartobj.itemname=item.itemName;
this.cartobj.price=item.price;
this.cartobj.description=item.description;
this.cartobj.remarks=item.remarks;
console.log(this.cartobj);
     this.service.Addtocart(this.cartobj).subscribe(
       res=>{
       console.log("Added to cart");
       alert('Added to cart');
     },
     err=>
     {
       console.log(err);
     }
     )
    }

}
