import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  admin: boolean = false;
  constructor() { }

  cambiarAdmin(){
    console.log("cambiando ", this.admin);
    
    this.admin=!this.admin;
  }

  get getAdmin(){
    return this.admin;
  }
}
