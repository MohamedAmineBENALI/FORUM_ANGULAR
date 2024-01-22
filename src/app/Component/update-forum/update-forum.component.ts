import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialogRef } from  '@angular/material/dialog';
import {ServicesService} from 'src/app/services.service'

@Component({
  selector: 'app-update-forum',
  templateUrl: './update-forum.component.html',
  styleUrls: ['./update-forum.component.scss']
})
export class UpdateForumComponent {
  constructor(private service:ServicesService,public dialogRef: MatDialogRef<ServicesService>) { }
  profileForm = new FormGroup({
    titre: new FormControl('')
  
  });
v:any
id:any;
titre:any;
  ngOnInit(): void {
    this.id = String(localStorage.getItem('idForum'));
    let resp = this.service.GetForumByID(this.id)
    resp.subscribe(data=>{this.v=data;});
  }

  saveForm(){
    this.id =String(localStorage.getItem('idForum'))
    this.titre=this.profileForm.value.titre;
   let resp= this.service.UpdateForum(this.titre,this.id);
   resp.subscribe(data=>{this.v=data;})




   
}

onClose() {
  
  this.dialogRef.close();
}
}
