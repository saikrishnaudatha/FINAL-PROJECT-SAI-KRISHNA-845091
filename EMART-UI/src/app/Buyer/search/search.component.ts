import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Model/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';

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

  }
  