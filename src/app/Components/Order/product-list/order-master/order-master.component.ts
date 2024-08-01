import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements AfterViewInit,AfterViewChecked {
  selectedCatId:number=0;
  CategoryList:ICategory[];
  TotalPrice:number=0
  @ViewChild('TemRef') CllientInput!:ElementRef
  @ViewChild(ProductListComponent) ProdInput!:ProductListComponent
  constructor() {
    this.CategoryList=[
      {id:1,name:'Laptop'},
      {id:2,name:'Apple'},
      {id:3,name:'HP'}
    ];    
  }
  ngAfterViewChecked(): void {
    debugger;
  }
  ngAfterViewInit(): void {

  }
  Subscriber(event:number){
    debugger;
this.TotalPrice=event;
  }
}
