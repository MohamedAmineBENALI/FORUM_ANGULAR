import { Component,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ServicesService} from 'src/app/services.service'
import{ModifierVilleComponent} from 'src/app/src/app/modifier-ville/modifier-ville.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{NewVilleComponent} from 'src/app/src/app/new-ville/new-ville.component'
import{WeatherComponent} from'src/app/src/app/weather/weather.component'
import{GeoComponent} from 'src/app/src/app/geo/geo.component'


@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.scss']
})
export class SinscrireComponent {
  displayedColumns: string[] =  ['Pays', 'capitale','lon','lat','Plus','weather','modifier','supprimer'];
  @ViewChild(MatSort, {static: false})sort: MatSort|undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  villes:any
  reponcesDataSource:any;
  searchKey: string='';
  reponce:any;
  w:any;
  p:any;

  constructor(private service:ServicesService,private dialog: MatDialog){}

  ngOnInit(): void {
    let resp=this.service.villes();
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

    this.dialog.open(NewVilleComponent,dialogConfig)
    .afterClosed()
    .subscribe(() => this.refresh());

  }
  onDelete(id:any){
    let resp=this.service.deleteVille(id);
    resp.subscribe(data=>{this.reponce=data; }); 

  }

  onUpdate(id:any){
    localStorage.setItem("id",id);

    const dialogConfig = new MatDialogConfig();
     
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";

      this.dialog.open(ModifierVilleComponent,dialogConfig)
      .afterClosed()
      .subscribe(() => this.refresh());
  }

  refresh(){
    let resp=this.service.villes();
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
