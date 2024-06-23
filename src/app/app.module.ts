import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule, // Asegurarse de que AppRoutingModule está importado
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    HttpClientProviderModule // Importar el módulo de proveedor de HTTP aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
