import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialogRef } from  '@angular/material/dialog';
import {ServicesService} from 'src/app/services.service'


@Component({
  selector: 'app-modifier-ville',
  templateUrl: './modifier-ville.component.html',
  styleUrls: ['./modifier-ville.component.scss']
})
export class ModifierVilleComponent {
  constructor(private service:ServicesService,public dialogRef: MatDialogRef<ServicesService>) { }
  profileForm = new FormGroup({
    id: new FormControl(0),
    Pays: new FormControl(''),
    capitale: new FormControl(''),
    lon: new FormControl(''),
    lat: new FormControl(''),
  
  });
v:any
id:any;
ville:any;
  ngOnInit(): void {
    this.id = String(localStorage.getItem('id'));
    let resp = this.service.villesId(this.id)
    resp.subscribe(data=>{this.ville=data;});
  }

  saveForm(){
    this.id =String(localStorage.getItem('id'))
    console.log(this.id)
   let resp= this.service.updateVille(this.id,this.profileForm.value);
   resp.subscribe(data=>{this.v=data;})




   
}

onClose() {
  
  this.dialogRef.close();
}
}
