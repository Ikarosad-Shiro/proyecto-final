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
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'; // Importar MatListModule

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
import { PerfilComponent } from './components/perfil/perfil.component'; // Importar el componente Perfil

import { HttpClientProviderModule } from './http-client.provider.module';
import { AuthService } from './services/auth.service'; // Importar el servicio de autenticación

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'consumoapi', component: ConsumoapiComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'perfil', component: PerfilComponent }, // Añadir la ruta para el componente Perfil
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
    VerificationDialogComponent,
    PerfilComponent // Declarar el componente Perfil
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
    RouterModule.forRoot(routes), // Importar RouterModule y definir las rutas
    MatMenuModule, // Importar MatMenuModule
    MatIconModule, // Importar MatIconModule
    MatDividerModule, // Importar MatDividerModule
    MatListModule // Importar MatListModule
  ],
  providers: [AuthService], // Proveer el servicio de autenticación
  bootstrap: [AppComponent]
})
export class AppModule { }
