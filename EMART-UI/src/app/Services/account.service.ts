import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import{Observable} from "Rxjs";
import { Buyer } from '../Model/buyer';
import { Seller } from '../Model/seller';

const Requestheaders={headers:new HttpHeaders({'content-Type':'application/json',})}
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string='http://localhost:51766/Account/'
  constructor(private http:HttpClient) { }

  public BuyerRegister(buyer:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'BuyerRegister',JSON.stringify(buyer),Requestheaders)
  }
  public SellerRegister(seller:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'SellerRegister',JSON.stringify(seller),Requestheaders)
  }
  public BuyerLogin(uname:string,pwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'BuyerLogin/'+uname+'/'+pwd,Requestheaders);
  }
  public SellerLogin(uname:string,pwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'SellerLogin/'+uname+'/'+pwd,Requestheaders);
  }
  
  

}