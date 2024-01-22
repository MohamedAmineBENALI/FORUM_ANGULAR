import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialogRef } from  '@angular/material/dialog';
import {ServicesService} from 'src/app/services.service'

@Component({
  selector: 'app-new-ville',
  templateUrl: './new-ville.component.html',
  styleUrls: ['./new-ville.component.scss']
})
export class NewVilleComponent {

  constructor(private service:ServicesService,public dialogRef: MatDialogRef<ServicesService>) { }
  i:number=100
  profileForm = new FormGroup({
    id: new FormControl(this.i),
    Pays: new FormControl(''),
    capitale: new FormControl(''),
    lon: new FormControl(''),
    lat: new FormControl(''),
  
  });
v:any
id:any;
ville:any;


  saveForm(){
    this.i=this.i+1;
   let resp= this.service.AjouterVille(this.profileForm.value);
   resp.subscribe(data=>{this.v=data;})
  }

}
