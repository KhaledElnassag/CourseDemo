import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
storeData:StoreData
isShow:boolean
constructor() {
  this.storeData=new StoreData('ITI Store','https://picsum.photos/400/300',['Cairo','Nasr-City']);
this.isShow= true;
}

Toggle(){
  debugger;
  this.isShow=!this.isShow;
}
}
