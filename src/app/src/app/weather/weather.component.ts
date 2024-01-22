import { Component } from '@angular/core';
import {ServicesService} from 'src/app/services.service'
import { MatDialogRef } from  '@angular/material/dialog';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  constructor(private service:ServicesService,public dialogRef: MatDialogRef<ServicesService>){}
lon:any;
lat:any;
w:any;
  ngOnInit(): void {
    this.lon = String(localStorage.getItem('lon'));
    this.lat = String(localStorage.getItem('lat'));


    let resp=this.service.weather(this.lon,this.lat);
    resp.subscribe(data=>{this.w=data;});
    
  }
  onClose() {
  
    this.dialogRef.close();
  }
}
