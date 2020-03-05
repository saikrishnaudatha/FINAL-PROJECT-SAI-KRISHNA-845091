import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../Model/items';

const Requestheaders={headers:new HttpHeaders({'content-Type':'application/json',})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:51766/Buyer/'
  constructor(private http:HttpClient) { }

  public SearchItems(name:string) : Observable<Items[]>
  {
    return  this.http.get<Items[]> (this.url+'SearchItem/'+name,Requestheaders)
  }
}
