import { AfterContentChecked, AfterViewChecked, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges,AfterContentChecked,AfterViewChecked,DoCheck {
productList:IProduct[];
productListVm:IProduct[];

cnt:number=0;
@Input() CatId:number=0;
constructor() {
this.productList=[
  {id:1,name:'Laptop',price:100,quantity:1,imgUrl:'https://picsum.photos/400/300',categoryId:1},
  {id:2,name:' Hp Laptop',price:200,quantity:0,imgUrl:'https://picsum.photos/400/300',categoryId:3},
  {id:3,name:'Lenovo Laptop',price:1000,quantity:10,imgUrl:'https://picsum.photos/400/300',categoryId:1},
  {id:4,name:'apple Laptop',price:300,quantity:15,imgUrl:'https://picsum.photos/400/300',categoryId:2},
  {id:5,name:'Sams Laptop',price:500,quantity:12,imgUrl:'https://picsum.photos/400/300',categoryId:3}
];
this.productListVm=this.productList

}
  ngDoCheck(): void {
    debugger
    }
  ngAfterContentChecked(): void {
    debugger
  }
  ngAfterViewChecked(): void {
    debugger
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    this.GetProductByCat();
  }
Buy(id:number,count:string){
  let prod=this.productList.find(p=>p.id==id);
  if(prod!= null){
    prod.quantity-=(+count);
  }
}
GetProductByCat(){
  debugger
  this.productListVm=this.productList.filter(p=>(this.CatId==0||p.categoryId==this.CatId))
}
}
