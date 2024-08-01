import { Injectable } from '@angular/core';
import { ProductListComponent } from '../Components/Order/product-list/product-list.component';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
private prodList:IProduct[];
  constructor() { 
    this.prodList=[
      {id:1,name:'Laptop',price:100,quantity:1,imgUrl:'https://picsum.photos/400/300',categoryId:1},
      {id:2,name:' Hp Laptop',price:200,quantity:0,imgUrl:'https://picsum.photos/400/300',categoryId:3},
      {id:3,name:'Lenovo Laptop',price:1000,quantity:10,imgUrl:'https://picsum.photos/400/300',categoryId:1},
      {id:4,name:'apple Laptop',price:300,quantity:15,imgUrl:'https://picsum.photos/400/300',categoryId:2},
      {id:5,name:'Sams Laptop',price:500,quantity:12,imgUrl:'https://picsum.photos/400/300',categoryId:3}
    ];
  }
  GetProdById(Id:number):IProduct|null{
    let p= this.prodList.find(p=>p.id==Id);
    return p?p:null;
  }
  GetAllProd():IProduct[]{
return this.prodList;
  }
  GetProductByCat(CatId:number){
    debugger
    return this.prodList.filter(p=>(CatId==0||p.categoryId==CatId))
  }
}
