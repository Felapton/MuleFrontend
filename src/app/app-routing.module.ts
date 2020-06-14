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
import { NagradaComponent } from './Components/nagrada/nagrada.component';
import { ProdajaComponent } from './Components/prodaja/prodaja.component';
import { TipKnjigeFormComponent } from './Components/tip-knjige-form/tip-knjige-form.component';
import { PisacFormComponent } from './Components/pisac-form/pisac-form.component';
import { IzdavacComponent } from './Components/izdavac/izdavac.component';
import { IzdavacFormComponent } from './Components/izdavac-form/izdavac-form.component';
import { KorisnikFormComponent } from './Components/korisnik-form/korisnik-form.component';
import { KupacFormComponent } from './Components/kupac-form/kupac-form.component';
import { NagradaFormComponent } from './Components/nagrada-form/nagrada-form.component';
import { KnjigaFormComponent } from './Components/knjiga-form/knjiga-form.component';
import { ProdajaFormComponent } from './Components/prodaja-form/prodaja-form.component';
import { ClanskaKartaFormComponent } from './Components/clanska-karta-form/clanska-karta-form.component';
import { PisacInfoComponent } from './Components/pisac-info/pisac-info.component';
import { KnjigaPiscuFormComponent } from './Components/knjiga-piscu-form/knjiga-piscu-form.component';
import { TipInfoComponent } from './Components/tip-info/tip-info.component';
import { IzdavacInfoComponent } from './Components/izdavac-info/izdavac-info.component';
import { KnjigaIzdavacFormComponent } from './Components/knjiga-izdavac-form/knjiga-izdavac-form.component';
import { KnjigaNagradiFormComponent } from './Components/knjiga-nagradi-form/knjiga-nagradi-form.component';
import { NagradaInfoComponent } from './Components/nagrada-info/nagrada-info.component';
import { KnjigaInfoComponent } from './Components/knjiga-info/knjiga-info.component';
import { KnjigaTipuFormComponent } from './Components/knjiga-tipu-form/knjiga-tipu-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'knjiga', component: KnjigaComponent},
  {path: 'knjiga/:id', component: KnjigaInfoComponent},
  {path: 'dodajKnjigu', component: KnjigaFormComponent},
  {path: 'dodajKnjigu/:id', component: KnjigaFormComponent},
  {path: 'dodajKnjiguPiscu', component: KnjigaPiscuFormComponent},
  {path: 'tip', component: TipKnjigeComponent},
  {path: 'tip/:id', component: TipInfoComponent},
  {path: 'dodajKnjiguTipu', component: KnjigaTipuFormComponent},
  {path: 'korisnik', component: KorisnikComponent},
  {path: 'dodajKorisnika', component: KorisnikFormComponent},
  {path: 'dodajKorisnika/:id', component: KorisnikFormComponent},
  {path: 'kupac', component: KupacComponent},
  {path: 'dodajKupca', component: KupacFormComponent},
  {path: 'dodajKupca/:id', component: KupacFormComponent},
  {path: 'clanska', component: ClanskaKartaComponent},
  {path: 'dodajClansku', component: ClanskaKartaFormComponent},
  {path: 'dodajClansku/:id', component: ClanskaKartaFormComponent},
  {path: 'pisac', component: PisacComponent},
  {path: 'pisac/:id', component: PisacInfoComponent},
  {path: 'dodajPisca', component: PisacFormComponent},
  {path: 'dodajPisca/:id', component: PisacFormComponent},
  {path: 'nagrada', component: NagradaComponent},
  {path: 'nagrada/:id', component: NagradaInfoComponent},
  {path: 'dodajNagradu', component: NagradaFormComponent},
  {path: 'dodajNagradu/:id', component: NagradaFormComponent},
  {path: 'dodajKnjiguNagradi', component: KnjigaNagradiFormComponent},
  {path: 'izdavac', component: IzdavacComponent},
  {path: 'izdavac/:id', component: IzdavacInfoComponent},
  {path: 'dodajIzdavaca', component: IzdavacFormComponent},
  {path: 'dodajIzdavaca/:id', component: IzdavacFormComponent},
  {path: 'dodajKnjiguIzdavacu', component: KnjigaIzdavacFormComponent},
  {path: 'prodaja', component: ProdajaComponent},
  {path: 'dodajProdaju', component: ProdajaFormComponent},
  {path: 'dodajProdaju/:id', component: ProdajaFormComponent},
  {path: 'dodajTip', component: TipKnjigeFormComponent},
  {path: 'dodajTip/:id', component: TipKnjigeFormComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
