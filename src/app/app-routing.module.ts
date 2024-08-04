import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/product-list/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { authGuardGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'Products',component:ProductListComponent},
    {path:'Products/:pid',component:ProductDetailsComponent},
    {path:'Order',component:OrderMasterComponent,canActivate:[authGuardGuard]}
  ]}
  ,
  {path:'Login',component:LoginComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
