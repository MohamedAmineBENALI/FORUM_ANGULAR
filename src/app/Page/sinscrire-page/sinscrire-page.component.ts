import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import {ServicesService} from 'src/app/services.service';
import{NotifService} from 'src/app/notif.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinscrire-page',
  templateUrl: './sinscrire-page.component.html',
  styleUrls: ['./sinscrire-page.component.scss']
})
export class SinscrirePageComponent {

  constructor(private service:ServicesService,private notificationService : NotifService,private route:Router) { }
  profileForm = new FormGroup({
    id: new FormControl(0),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    mdp: new FormControl(''),
    role: new FormControl(0),
    actif: new FormControl(0)

  
  });
v:any



  saveForm(){
   let resp= this.service.sinscrire(this.profileForm.value);
   resp.subscribe(data=>{this.v=data;
    console.log(this.v);
  if (this.v==0){
    this.notificationService.warn('L\'adresse mail existe déjà!');

  }
  if(this.v==1){
    this.notificationService.warn('Votre compte est enregistré avec susses');
    this.route.navigate(['/']);

  }
  
  
  })
  
  }

}
