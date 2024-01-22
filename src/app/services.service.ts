import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http:HttpClient) { }

  Login(username:string,mdp:string) {
        
    return  this.http.get("http://127.0.0.1:5041/Login/"+username+"/"+mdp);
   }

   sinscrire(user :any) {
        
    return  this.http.post("http://127.0.0.1:5041/addUser",user);
   }


   AllForums() {
        
    return  this.http.get("http://127.0.0.1:5041/getAllForums");
   }


   AddForum(Forum :string) {
        
    return  this.http.get("http://127.0.0.1:5041/addFormus/"+Forum);
   }

   deleteForum(Forum :number) {
        
    return  this.http.delete("http://127.0.0.1:5041/supprimerForms/"+Forum);
   }


   UpdateForum(titre :string,id :number) {
        
    return  this.http.get("http://127.0.0.1:5041/modifierForums/"+id+"/"+titre);
   }


   GetForumByID(id :number) {
        
    return  this.http.get("http://127.0.0.1:5041/ForumsByID/"+id);
   }


   AllThemes(f:any) {
        
    return  this.http.get("http://localhost:5041/getAllThemes/"+f);
   }


   AllPostes(f:any) {
        
    return  this.http.get("http://localhost:5041/getAllPostes/"+f);
   }



   
   Rate(f:any,rate:any) {
        
     return this.http.get("http://localhost:5041/modifierRate/"+f+"/"+rate);
   }





   cmntAdd(cmt :any) {
        
    return  this.http.post("http://localhost:5041/AddCommentaires",cmt);
   }









   villes() {
        
    return  this.http.get("http://127.0.0.1:8000/Villes/all");
   }

   villesId(id:number) {
        
    return  this.http.get("http://127.0.0.1:8000/Villes/Id/"+id);
   }


   deleteVille(id:number) {
        
    return  this.http.delete("http://127.0.0.1:8000/Ville/delete/"+id);
   }

   updateVille(id:number,ville:any) {
        
    return  this.http.put("http://127.0.0.1:8000/Ville/update/"+id,ville);
   }

   AjouterVille(ville:any) {
        
    return  this.http.post("http://127.0.0.1:8000/Ville/add",ville);
   }

   plus(lon:string,lat:string) {
        
    return  this.http.get("http://api.positionstack.com/v1/reverse?access_key=feae8f87012482da252fd1d756a65eda&query="+lat+","+lon);
   }


   plus2(lon:string,lat:string) {
        
    return  this.http.get("http://127.0.0.1:8000/geo/"+lat+"/"+lon);
   }

   weather(lon:string,lat:string) {
        
    return  this.http.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=5e74fca23a80b4aaa4e0a82c5440ed82&fbclid=IwAR00gToUOvR9_z6XOLn-Z_V-XeVrM-F7RRZot3Zz_cghP9HYNqZwfvTv7eo&units=metric");
   }



}
