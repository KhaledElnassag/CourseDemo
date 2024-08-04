import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) { }
  GetProducts():Observable<IProduct[]>{
   return this.httpClient.get<IProduct[]>("https://localhost:7114/api/Products")
  }
  // GetProducByCatId(catId:number):Observable<IProduct[]>{

  // }
  // GetProductById(pId:number):Observable<IProduct>{
  // }

  // AddProduct(prod:IProduct):Observable<IProduct>{
  
  // }
  // upProduct(pId:number,prod:IProduct){

  // }
  // delProduct(pId:number){

  // }
}
