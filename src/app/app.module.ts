import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KnjigaService } from './Services/knjiga.service';
import { HomeComponent } from './Components/home/home.component';
import { TipKnjigeService } from './Services/tip-knjige.service';
import { KnjigaComponent } from './Components/knjiga/knjiga.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TipKnjigeComponent } from './Components/tip-knjige/tip-knjige.component';
import { TipKnjigeFormComponent } from './Components/tip-knjige-form/tip-knjige-form.component';
import { KorisnikComponent } from './Components/korisnik/korisnik.component';

@NgModule({
  declarations: [
    AppComponent,
    KnjigaComponent,
    HomeComponent,
    PageNotFoundComponent,
    TipKnjigeComponent,
    TipKnjigeFormComponent,
    KorisnikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    KnjigaService,
    TipKnjigeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
