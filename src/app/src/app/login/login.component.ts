import { Component } from '@angular/core';
import {ServicesService} from 'src/app/services.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:any;
  mdp:any;
  response:any;
  constructor(private service:ServicesService,private route:Router){}
  connexion(){
    let resp = this.service.Login(this.username,this.mdp);
    resp.subscribe(data=>{this.response=data;
    
    console.log(this.response)
    if(this.response==1){
    this.route.navigate(['Accueil'])

    }
    });

  }
}
