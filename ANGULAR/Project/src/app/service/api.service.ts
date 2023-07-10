import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //user part
  public GetMenus():Observable<any>
  {
    console.log("GA");
    return this.http.get('https://localhost:7125/api/Menus')
    
  }
  public GetMenu(menuId: string):Observable<any>
  {
    console.log(menuId);
    return this.http.get(`https://localhost:7125/api/Menus/${menuId}`);
  }
 
  public PostMenu(productlist: any): Observable<any> {
    return this.http.post('https://localhost:7125/api/Menus',
      productlist
    );
  }
  public DeleteMenu(menuId: any): Observable<any> {
    return this.http.delete('https://localhost:7125/api/Menus/' + menuId  
    );
  }
    public PutMenu(menuId:string,Menus:any):Observable<any> {
      let url= 'https://localhost:7125/api/Menus/' + menuId
      return this.http.put(url,Menus);
    }
  // public getVeg():Observable<any>
  // {
  //   return this.http.get(this.baseport+'/AdminSide/Vegetables')
  // }
  // public getGroc():Observable<any>
  // {
  //   return this.http.get(this.baseport+'/AdminSide/Grocery')
  // }
  // public getStat():Observable<any>
  // {
  //   return this.http.get(this.baseport+'/AdminSide/Stationary')
  // }


  // // admin
  // public getProdt():Observable<any>
  // {
  //   return this.http.get(this.baseport+'/AdminSide/DisplayingAllItems')
  // }
  // //Add new prdt
  // public addPrdt(prdtlist:any):Observable<any>
  // {
  //   return this.http.post(this.baseport +'/AdminSide/Updating the Values/',prdtlist);
  // }
  // //del by id
  // public delbyId(id:number):Observable<any>
  // {
  //   return this.http.delete(this.baseport+"/AdminSide/"+id)
  // }
  // //update
  // public update(id:number,updatedPrdt:any):Observable<any>
  // {
  //   const url = `${this.baseport}/AdminSide/${id}`;
  //   return this.http.put(url , updatedPrdt);
  // }
}