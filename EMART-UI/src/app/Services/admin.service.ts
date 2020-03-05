
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import{Observable} from "Rxjs";
import { Category } from '../Model/category';
import { SubCategory } from '../Model/sub-category';


const Requestheaders={headers:new HttpHeaders({'content-Type':'application/json',})}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  url:string='http://localhost:51766/Admin/'
  constructor(private http:HttpClient) { }

  public AddCategories(category:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategories',JSON.stringify(category),Requestheaders);
  }

  public AddSubCategories(subcategory:SubCategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSubCategories',subcategory,Requestheaders)
  }
  
 
  public ViewCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'ViewCategories',Requestheaders);
  }
  public ViewSubCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'ViewSubCategories',Requestheaders);
  }
  public EditCategories(catobj:Category):Observable<any>
  {
    return this.http.put<any>(this.url+'EditCategories',JSON.stringify(catobj),Requestheaders);
  }
  public EditSubCategories(subcatobj:SubCategory):Observable<any>
  {
    return this.http.put<any>(this.url+'EditSubCategories',JSON.stringify(subcatobj),Requestheaders);
  }
  
  public DeleteCategories(catid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCategories/'+catid,Requestheaders);
  }
  public DeleteSubCategories(subcatid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteSubCategories/'+subcatid,Requestheaders);
  }
  public GetCatById(catid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetCatById/'+catid,Requestheaders);
  }
  public GetSubCatById(subcatid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetSubCatById/'+subcatid,Requestheaders);
  }
  public GetCategories():Observable<Category[]>
  {
    return this.http.get<any>(this.url+'GetCategories',Requestheaders);
  }
}


