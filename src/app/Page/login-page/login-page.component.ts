import { Component } from '@angular/core';
import {ServicesService} from 'src/app/services.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username:any;
  mdp:any;
  response:any;
  constructor(private service:ServicesService,private route:Router){}
  connexion(){
    let resp = this.service.Login(this.username,this.mdp);
    resp.subscribe(data=>{this.response=data;
    
    console.log(this.response)
    if(this.response==-1){

    }
    else if (this.response==0) {this.route.navigate(['AdminForums']); localStorage.setItem("idUser",this.response);
  } 
    else {this.route.navigate(['Forums']);localStorage.setItem("idUser",this.response);
  }
    });

  }
}
