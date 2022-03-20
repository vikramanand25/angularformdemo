import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formpage';
  newUser:string="";
  userinfo:any={};
  getName(getname:string){
    this.newUser=getname;
  }
  submitNewUserData(info:NgForm)
  {
    this.userinfo=info;
    console.log(this.userinfo);
  }
}
