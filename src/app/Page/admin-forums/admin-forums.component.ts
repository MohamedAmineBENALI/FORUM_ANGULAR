import { Component,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ServicesService} from 'src/app/services.service'
import{ModifierVilleComponent} from 'src/app/src/app/modifier-ville/modifier-ville.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{WeatherComponent} from'src/app/src/app/weather/weather.component'
import{GeoComponent} from 'src/app/src/app/geo/geo.component'
import{AddForumComponent} from 'src/app/Component/add-forum/add-forum.component'
import { Router } from '@angular/router';
import{UpdateForumComponent} from 'src/app/Component/update-forum/update-forum.component'
@Component({
  selector: 'app-admin-forums',
  templateUrl: './admin-forums.component.html',
  styleUrls: ['./admin-forums.component.scss']
})
export class AdminForumsComponent {
  displayedColumns: string[] =  ['titre', 'cdate','modifier','supprimer','postes'];
  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  villes:any
  reponcesDataSource:any;
  searchKey: string='';
  reponce:any;
  w:any;
  p:any;

  constructor(private router: Router,private service:ServicesService,private dialog: MatDialog){}

  ngOnInit(): void {
    let resp=this.service.AllForums();
    resp.subscribe(data=>{this.villes=data;
    this.reponcesDataSource=new MatTableDataSource(this.villes); 
    this.reponcesDataSource.paginator = this.paginator;
    this.reponcesDataSource.sort = this.sort;  }); 
    
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.reponcesDataSource.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate(){
    const dialogConfig = new MatDialogConfig();
     
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    this.dialog.open(AddForumComponent,dialogConfig)
    .afterClosed()
    .subscribe(() => this.refresh());

  }



  
  onDelete(id:any){
    let resp=this.service.deleteForum(id);
    resp.subscribe(data=>{this.reponce=data; }); 

  }

  onUpdate(id:any){
    localStorage.setItem("idForum",id);

    const dialogConfig = new MatDialogConfig();
     
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";

      this.dialog.open(UpdateForumComponent,dialogConfig)
      .afterClosed()
      .subscribe(() => this.refresh());
  }

  refresh(){
    let resp=this.service.AllForums();
    resp.subscribe(data=>{this.villes=data;
    this.reponcesDataSource=new MatTableDataSource(this.villes); 
    this.reponcesDataSource.paginator = this.paginator;
    this.reponcesDataSource.sort = this.sort;  }); 
    
}

plus(lon:any,lat:any){
  localStorage.setItem("lon",lon);
  localStorage.setItem("lat",lat);

  const dialogConfig = new MatDialogConfig();
     
      dialogConfig.autoFocus = true;
      dialogConfig.width = "30%";

      this.dialog.open(GeoComponent,dialogConfig)
      .afterClosed()
      .subscribe(() => this.refresh());
}


postes(idPoste:any){
  localStorage.setItem("idPoste",idPoste);
  this.router.navigate(['AdminPostes'])
}


weather(lon:any,lat:any){
  localStorage.setItem("lon",lon);
  localStorage.setItem("lat",lat);

  const dialogConfig = new MatDialogConfig();
     
      dialogConfig.autoFocus = true;
      dialogConfig.width = "30%";

      this.dialog.open(WeatherComponent,dialogConfig)
      .afterClosed()
      .subscribe(() => this.refresh());

}

}
