import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { ConsumoapiComponent } from './components/consumoapi/consumoapi.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { RegisterComponent } from './components/register/register.component';  // Asegúrate de importar el componente Register

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'consumoapi', component: ConsumoapiComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'register', component: RegisterComponent },  // Añade la ruta para el componente Register
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
