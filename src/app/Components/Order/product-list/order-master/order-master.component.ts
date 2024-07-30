import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent {
  selectedCatId:number=0;
  CategoryList:ICategory[];

  constructor() {
    this.CategoryList=[
      {id:1,name:'Laptop'},
      {id:2,name:'Apple'},
      {id:3,name:'HP'}
    ];    
  }
}
