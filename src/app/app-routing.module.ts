import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { KnjigaComponent } from './Components/knjiga/knjiga.component';
import { TipKnjigeComponent } from './Components/tip-knjige/tip-knjige.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { KorisnikComponent } from './Components/korisnik/korisnik.component';
import { KupacComponent } from './Components/kupac/kupac.component';
import { ClanskaKartaComponent } from './Components/clanska-karta/clanska-karta.component';
import { PisacComponent } from './Components/pisac/pisac.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'knjiga', component: KnjigaComponent},
  {path: 'tip', component: TipKnjigeComponent},
  {path: 'korisnik', component: KorisnikComponent},
  {path: 'kupac', component: KupacComponent},
  {path: 'clanska', component: ClanskaKartaComponent},
  {path: 'pisac', component: PisacComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
