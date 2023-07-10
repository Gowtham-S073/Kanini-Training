import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MarriageCateringComponent } from './marriage-catering/marriage-catering.component';
import { PartyCateringComponent } from './party-catering/party-catering.component';
import { CorporateCateringComponent } from './corporate-catering/corporate-catering.component';
import { IndustrialCateringComponent } from './industrial-catering/industrial-catering.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomepageComponent},
  {path:'admin',component:AdminComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'home/mainpage',component:MainpageComponent},
  {path:'mainpage/marriage',component:MarriageCateringComponent},
  {path:'mainpage/party',component:PartyCateringComponent},
  {path:'mainpage/corporate',component:CorporateCateringComponent},
  {path:'mainpage/industrial',component:IndustrialCateringComponent},
  {path:'marriage',component:MarriageCateringComponent},
  {path:'party',component:PartyCateringComponent},
  {path:'corporate',component:CorporateCateringComponent},
  {path:'industrial',component:IndustrialCateringComponent},
  {path:'mainpage/marriage/orderpage',component:OrderpageComponent},
  {path:'mainpage/party/orderpage',component:OrderpageComponent},
  {path:'mainpage/corporate/orderpage',component:OrderpageComponent},
  {path:'mainpage/industrial/orderpage',component:OrderpageComponent},
  {path:'orderpage',component:OrderpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
