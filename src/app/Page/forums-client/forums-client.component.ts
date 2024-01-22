import { Component } from '@angular/core';
import {ServicesService} from 'src/app/services.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forums-client',
  templateUrl: './forums-client.component.html',
  styleUrls: ['./forums-client.component.scss']
})
export class ForumsClientComponent {
  constructor(private router: Router,private service:ServicesService){}
  Forums :any;
  ngOnInit(): void {
    let resp=this.service.AllForums();
    resp.subscribe(data=>{this.Forums=data;
 }); 
    
  }


  ThemeId(idForums :any){
    localStorage.setItem("idForums",idForums);
    this.router.navigate(['Themes']);
  }
}
