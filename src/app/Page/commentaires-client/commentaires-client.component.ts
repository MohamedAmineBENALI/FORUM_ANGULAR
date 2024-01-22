import { Component,OnInit, ChangeDetectorRef} from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialogRef } from  '@angular/material/dialog';
import {ServicesService} from 'src/app/services.service'

import {ServiceCmntService} from 'src/app/service-cmnt.service'


@Component({
  selector: 'app-commentaires-client',
  templateUrl: './commentaires-client.component.html',
  styleUrls: ['./commentaires-client.component.scss']
})
export class CommentairesClientComponent {

  constructor(private service:ServicesService,public dialogRef: MatDialogRef<ServicesService>,public services:ServiceCmntService,private cdr: ChangeDetectorRef) { }

v:any;
data:any;
aux:boolean=false;

isTimerFinished: boolean = false;
profileForm = new FormGroup({
    Commentaire: new FormControl(''),

    id_personnes: new FormControl(localStorage.getItem('idUser')),
    id_Poste: new FormControl(localStorage.getItem('idPoste')),





  
  });

  ngOnInit() {
    this.startTimer(10000);
    this.services.apiValue$.subscribe((data) => {
      this.data = data ; 
      this.data.users;

      console.log(this.data[0])
      if(this.data.users.length==this.data.num ||this.isTimerFinished==true )
        {this.aux=true;}
    });
  }

  startTimer(duration: number): void {
    setTimeout(() => {
      // Action à effectuer lorsque le chronomètre est terminé
      this.timerFinished();
    }, duration);
  }


  timerFinished(): void {
    this.isTimerFinished = true;

  }


  onClose() {
  
    this.dialogRef.close();
  }


  cmnt(){
    console.log(this.profileForm.value.Commentaire) 
    console.log(this.profileForm.value.id_Poste) 
    console.log(this.profileForm.value.id_personnes) 


let resp= this.service.cmntAdd(this.profileForm.value);
resp.subscribe(data=>{this.v=data;})
  
  
  }
}
