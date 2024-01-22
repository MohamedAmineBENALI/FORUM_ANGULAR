import { Component } from '@angular/core';
import {ServicesService} from 'src/app/services.service'
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{CommentairesClientComponent} from 'src/app/Page/commentaires-client/commentaires-client.component'

@Component({
  selector: 'app-postes-client',
  templateUrl: './postes-client.component.html',
  styleUrls: ['./postes-client.component.scss'],

})
export class PostesClientComponent {
  constructor(private router: Router,private service:ServicesService,private dialog: MatDialog){}
  Postes :any;
  rates:any;
  ngOnInit(): void {
    let resp=this.service.AllPostes(localStorage.getItem("idPoste"));
    resp.subscribe(data=>{this.Postes=data;

 }); 
 

}
rate(r:any){

  let resp=this.service.Rate(localStorage.getItem("idPoste"),r);
  resp.subscribe(data=>{this.rates=data;

});





}




comments(){

  const dialogConfig = new MatDialogConfig();
   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";

    this.dialog.open(CommentairesClientComponent,dialogConfig)
    .afterClosed()
    .subscribe(() => this.refresh());
}
refresh(){}

}
