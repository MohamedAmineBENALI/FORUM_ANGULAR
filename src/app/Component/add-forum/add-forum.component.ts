import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialogRef } from  '@angular/material/dialog';
import {ServicesService} from 'src/app/services.service'
@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.scss']
})
export class AddForumComponent {

  constructor(private service:ServicesService,public dialogRef: MatDialogRef<ServicesService>) { }
  profileForm = new FormGroup({

    titre: new FormControl(''),


  
  });
v:any
id:any;
ville:any;
titre:any;


  saveForm(){
    this.titre=this.profileForm.value.titre;
     console.log(this.titre)
   let resp= this.service.AddForum(this.titre);
   resp.subscribe(data=>{this.v=data;})
  }

}