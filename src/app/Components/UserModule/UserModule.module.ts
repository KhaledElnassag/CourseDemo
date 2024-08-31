import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleComponent } from './UserModule.component';
import { EditUserProfileComponent } from './EditUserProfile/EditUserProfile.component';
import { RouterModule, Routes } from '@angular/router';
const Roots:Routes=[
  {path:'',component:UserModuleComponent},
  {path:'EditUser',component:EditUserProfileComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(Roots)
  ],
  declarations: [
    UserModuleComponent,
    EditUserProfileComponent
  ]
})
export class UserModuleModule { }
