import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './src/app/login/login.component';
import { SinscrireComponent } from './src/app/sinscrire/sinscrire.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewVilleComponent } from './src/app/new-ville/new-ville.component';
import { ModifierVilleComponent } from './src/app/modifier-ville/modifier-ville.component';
import { WeatherComponent } from './src/app/weather/weather.component';
import { GeoComponent } from './src/app/geo/geo.component';
import { CategorieComponent } from './categorie/categorie.component';
import { LoginPageComponent } from './Page/login-page/login-page.component';
import { SinscrirePageComponent } from './Page/sinscrire-page/sinscrire-page.component';
import { AdminForumsComponent } from './Page/admin-forums/admin-forums.component';
import { AddForumComponent } from './Component/add-forum/add-forum.component';
import { UpdateForumComponent } from './Component/update-forum/update-forum.component';
import { AdminPostesComponent } from './Page/admin-postes/admin-postes.component';
import { ForumsClientComponent } from './Page/forums-client/forums-client.component';
import { ThemesClientComponent } from './Page/themes-client/themes-client.component';
import { PostesClientComponent } from './Page/postes-client/postes-client.component';
import { NgModel } from '@angular/forms';
import { CommentairesClientComponent } from './Page/commentaires-client/commentaires-client.component';
import { ProfilComponent } from './Page/profil/profil.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SinscrireComponent,
    NewVilleComponent,
    ModifierVilleComponent,
    WeatherComponent,
    GeoComponent,
    CategorieComponent,
    LoginPageComponent,
    SinscrirePageComponent,
    AdminForumsComponent,
    AddForumComponent,
    UpdateForumComponent,
    AdminPostesComponent,
    ForumsClientComponent,
    ThemesClientComponent,
    PostesClientComponent,
    CommentairesClientComponent,
    ProfilComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatIconModule,MatInputModule,MatPaginatorModule,MatSortModule,MatTableModule
    ,MatListModule,MatSelectModule,MatSliderModule,MatSlideToggleModule,MatExpansionModule,MatTabsModule,MatStepperModule,MatGridListModule,MatChipsModule,MatNativeDateModule
    ,ReactiveFormsModule,MatDatepickerModule,MatRadioModule,MatButtonToggleModule,MatSnackBarModule,MatDialogModule, BrowserAnimationsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}),
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
