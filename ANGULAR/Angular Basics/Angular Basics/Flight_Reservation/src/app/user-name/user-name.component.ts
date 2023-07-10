import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
username =null;
msg='';
user : boolean=false;


onreset(){
 
  if(this.username==null){
    this.msg='User Name is Empty!!!';
  }
  else{
    this.msg='Welcome'+" "+this.username;

  }
  
  this.username=null;
 
  
}
}
