import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './src/app/login/login.component';
import { SinscrireComponent } from './src/app/sinscrire/sinscrire.component';
import { CategorieComponent } from './categorie/categorie.component';
import {LoginPageComponent} from './Page/login-page/login-page.component';
import{SinscrirePageComponent} from './Page/sinscrire-page/sinscrire-page.component';
import{AdminForumsComponent} from './Page/admin-forums/admin-forums.component';
import{AdminPostesComponent} from './Page/admin-postes/admin-postes.component';
import{ForumsClientComponent} from './Page/forums-client/forums-client.component';
import{ThemesClientComponent} from './Page/themes-client/themes-client.component';
import{PostesClientComponent} from'./Page/postes-client/postes-client.component'
import{ProfilComponent}from './Page/profil/profil.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'AdminForums', component: AdminForumsComponent },
  { path: 'Sinscrire', component: SinscrirePageComponent },
  { path: 'AdminPostes', component: AdminPostesComponent },
  { path: 'Forums', component: ForumsClientComponent },
  { path: 'Themes', component: ThemesClientComponent },
  { path: 'Postes', component: PostesClientComponent },
  { path: 'Profil', component: ProfilComponent },



  
  { path: 'Accueil', component: SinscrireComponent },
  { path: 'CategorieComponent', component: CategorieComponent }


  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 