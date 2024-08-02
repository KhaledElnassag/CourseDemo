import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct|null=null
  prodId:number=0;
  constructor(private activeRoute:ActivatedRoute,private prodService:StaticProductsService
   ,private router:Router,private location:Location 
  ) {
  
  }
  
  ngOnInit(): void {
    debugger; 
    //  this.prodId=Number(this.activeRoute.snapshot.paramMap.get('pid'));
    this.activeRoute.paramMap.subscribe((paraMap)=>{
      this.prodId=Number(paraMap.get('pid'));
      this.product=this.prodService.GetProdById(this.prodId);
    })
  }
  onClick(){
    // this.router.navigate(['Products']);
    this.location.back();
  }
  prevProduct(){
let idx=this.prodService.GetAllProd().map(p=>p.id).indexOf(this.prodId);
let id=this.prodService.GetAllProd()[idx-1].id;
this.router.navigate(['Products',id])
console.log(idx);
  }
  nextProd(){
    let idx=this.prodService.GetAllProd().map(p=>p.id).indexOf(this.prodId);
    let id=this.prodService.GetAllProd()[idx+1].id;
    this.router.navigate(['Products',id])
    console.log(idx);
  }
}

