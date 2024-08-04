import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsPromotionService {
  private adsList:string[];
  constructor() {
    this.adsList=[
      "Big Discounts",
      "Sale Up to 50%",
      "Check Our white friday offer",
      // "",
      "special white friday offer up to 70%"
    ]
  }
  getSchedulAds(cnt:number):Observable<string>{
    return new Observable<string>(observer=>{
      let idx=0;
      let id=setInterval(() => {
        console.log("interval Work!")
        if(idx==this.adsList.length){
          observer.complete();
        }
        else if(this.adsList[idx]==""){
          observer.error();
        }
        else 
        observer.next(this.adsList[idx++]);
      }, cnt*1000);
      return {
        unsubscribe(){
          clearInterval(id);
        }
      }
    })
  }
}
