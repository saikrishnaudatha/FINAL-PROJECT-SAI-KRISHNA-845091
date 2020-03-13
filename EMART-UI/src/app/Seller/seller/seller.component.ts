import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private route:Router) {
    if(!(localStorage.getItem('sellerid'))){
      this.route.navigateByUrl('/home');
    }
   }

  ngOnInit() {
    
  }

  Logout()
  {
    localStorage.removeItem('sellerid');
    this.route.navigateByUrl('/home');
  }
}

