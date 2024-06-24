import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { ConsumoapiComponent } from './components/consumoapi/consumoapi.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ActualizarPerfilComponent } from './components/actualizarperfil/actualizarperfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'consumoapi', component: ConsumoapiComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'actualizarperfil', component: ActualizarPerfilComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
