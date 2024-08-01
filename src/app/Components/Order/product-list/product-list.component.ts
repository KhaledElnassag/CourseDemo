import { AfterContentChecked, AfterViewChecked, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges,AfterContentChecked,AfterViewChecked,DoCheck {
// productList:IProduct[];
productListVm:IProduct[];

cnt:number=0;
@Input() CatId:number=0;
@Output() event:EventEmitter<number>=new EventEmitter<number>();
constructor(private prodService:StaticProductsService) {

this.productListVm=prodService.GetAllProd();

}
  ngDoCheck(): void {
    
    }
  ngAfterContentChecked(): void {
    
  }
  ngAfterViewChecked(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    this.productListVm=this.prodService.GetProductByCat(this.CatId);
  }
Buy(id:number,count:string){
  debugger;
  let prod=this.prodService.GetProdById(id);
  if(prod!= null){
    prod.quantity-=(+count);
    var TotalPrice=(+count)*prod.price;
    this.event.emit(TotalPrice);
  }
}

}
