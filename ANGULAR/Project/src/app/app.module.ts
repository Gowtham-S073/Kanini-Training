import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PartyCateringComponent } from './party-catering/party-catering.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MarriageCateringComponent } from './marriage-catering/marriage-catering.component';
import { CorporateCateringComponent } from './corporate-catering/corporate-catering.component';
import { IndustrialCateringComponent } from './industrial-catering/industrial-catering.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarriageCateringComponent,
    PartyCateringComponent,
    CorporateCateringComponent,
    IndustrialCateringComponent,
    HomepageComponent,
    MainpageComponent,
    OrderpageComponent,
    SignupComponent,
    UserComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
