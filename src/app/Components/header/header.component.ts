import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';
import { AdsPromotionService } from 'src/app/Services/ads-promotion.service';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean=false;
  constructor(private loginService:LoginServiceService,private adsService:AdsPromotionService) {
    debugger;
    loginService.loggedSubject.subscribe(val=>{
      this.isLogged=val;
    })
  }
    ngOnInit(): void {
     debugger;
      this.adsService.getSchedulAds(1).pipe(
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
   

}
