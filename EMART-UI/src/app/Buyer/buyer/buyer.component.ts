import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private route:Router) {
    if(!(localStorage.getItem('buyerId'))){
      this.route.navigateByUrl('/home');
    }
   }

  ngOnInit() {
    
  }

  Logout()
  {
    localStorage.removeItem('buyerid');
    this.route.navigateByUrl('/home');
  }
}

