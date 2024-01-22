import { Component } from '@angular/core';
import {ServicesService} from 'src/app/services.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-themes-client',
  templateUrl: './themes-client.component.html',
  styleUrls: ['./themes-client.component.scss']
})
export class ThemesClientComponent {



  constructor(private router: Router,private service:ServicesService){}
  Themes :any;
  ngOnInit(): void {
    let resp=this.service.AllThemes(localStorage.getItem("idForums"));
    resp.subscribe(data=>{this.Themes=data;
 }); 
    
  }

  PostesID(idPoste: any){
    localStorage.setItem("idPoste",idPoste);
    console.log(idPoste)
  }
  
}
