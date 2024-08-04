import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { AdsPromotionService } from 'src/app/Services/ads-promotion.service';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
storeData:StoreData
isShow:boolean
subscription!:Subscription
constructor(private adsService:AdsPromotionService,private prodervice:ProductServiceService) {
  debugger;
  this.storeData=new StoreData('ITI Store','https://picsum.photos/400/300',['Cairo','Nasr-City']);
this.isShow= true;
prodervice.GetProducts().subscribe(val=>{
  console.log(val);
})
}
  ngOnDestroy(): void {
this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription=this.adsService.getSchedulAds(1).pipe(
      filter(data=>data.includes("friday ")),
      map(data=>`${"Ads_"}${data}`)
    ).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:()=>{
        console.log("error");
      },
      complete:()=>{
        console.log("Complete");
      }
    })
  }

Toggle(){
  this.isShow=!this.isShow;
}
}
