import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { ConsumoapiComponent } from './components/consumoapi/consumoapi.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { VerificationDialogComponent } from './components/verification-dialog/verification-dialog.component';

import { HttpClientProviderModule } from './http-client.provider.module'; // Importar el módulo de proveedor de HTTP
import { environment } from '../environments/environment'; // Importar el entorno de Firebase

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'consumoapi', component: ConsumoapiComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SesionComponent,
    ConsumoapiComponent,
    CatalogoComponent,
    RegisterComponent,
    PagenotfoundComponent,
    JuegosComponent,
    VerificationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    HttpClientProviderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializar Firebase
    AngularFireAuthModule, // Importar módulo de autenticación
    RouterModule.forRoot(routes) // Importar RouterModule y definir las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
