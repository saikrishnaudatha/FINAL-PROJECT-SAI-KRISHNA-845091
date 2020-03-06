import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import{Observable} from "Rxjs";
import { Items } from '../Model/items';
import { Category } from '../Model/category';
import { SubCategory } from '../Model/sub-category';
import { Seller } from '../Model/seller';
import { identifierModuleUrl } from '@angular/compiler';



const Requestheaders={headers:new HttpHeaders({'content-Type':'application/json',
'Authorization':'Bearer'+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  GetProfile(id1: string) {
    throw new Error("Method not implemented.");
  }

  url:string='http://localhost:51766/Item/'
  constructor(private http:HttpClient) { }

  public AddItem(item:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItem',JSON.stringify(item),Requestheaders);
  }
  public ViewProfile(id:string):Observable<Seller[]>
  {
    return this.http.get<Seller[]>(this.url+'ViewProfile/'+id,Requestheaders);
  }

public ViewItems():Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'ViewItems',Requestheaders);
  }
  public GetCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategories',Requestheaders);
  }
  
  public GetSubCategories( catid:string):Observable<SubCategory[]>
  {
    return this.http.get<SubCategory[]>(this.url+'GetSubCategories/'+catid);
  }
  public DeleteItem(itemid:string):Observable<any>
{
  
  return this.http.delete<any>(this.url+'DeleteItem/'+itemid,Requestheaders);

}
public UpdateItem(item:Items):Observable<any>
{
  return this.http.put<any>(this.url+'UpdateItem/',JSON.stringify(item),Requestheaders);
}
public GetItem(id:string) : Observable<Items>
{
  return this.http.get<Items>(this.url+'GetItem/'+id,Requestheaders)
}
public EditProfile()
{
  return this.http.put<Items>(this.url+'EditProfile',Requestheaders)
}


}
