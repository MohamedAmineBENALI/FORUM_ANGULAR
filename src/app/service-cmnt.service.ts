import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject,interval  } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface ApiData {
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceCmntService {


  private apiValueSubject = new BehaviorSubject<any>({ nom: 'Valeur initiale de l\'API' });
  
  apiValue$ = this.apiValueSubject.asObservable();

  constructor(private http: HttpClient) {
    // Mettre à jour automatiquement toutes les 5 secondes
    interval(500)
      .pipe(
        switchMap(() => this.http.get<any>('http://localhost:5041/getAllCommentaires/'+localStorage.getItem('idPoste')))
      )
      .subscribe((data) => {
        this.apiValueSubject.next(data);
      });
  }












}
