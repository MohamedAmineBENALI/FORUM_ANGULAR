import { Component } from '@angular/core';
import {ServicesService} from 'src/app/services.service'
import { MatDialogRef } from  '@angular/material/dialog';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent {
  constructor(private service:ServicesService,public dialogRef: MatDialogRef<ServicesService>){}
lon:any;
lat:any;
w:any;
  ngOnInit(): void {
    this.lon = String(localStorage.getItem('lon'));
    this.lat = String(localStorage.getItem('lat'));


    let resp=this.service.plus2(this.lon,this.lat);
    resp.subscribe(data=>{this.w=data;
    console.log(this.w)
    });
    
  }
  onClose() {
  
    this.dialogRef.close();
  }
}
