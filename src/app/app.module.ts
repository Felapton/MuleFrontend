import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { KnjigaService } from './Services/knjiga.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TipKnjigeComponent } from './tip-knjige/tip-knjige.component';
import { TipKnjigeService } from './Services/tip-knjige.service';
import { TipKnjigeFormComponent } from './tip-knjige-form/tip-knjige-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KnjigaComponent,
    HomeComponent,
    PageNotFoundComponent,
    TipKnjigeComponent,
    TipKnjigeFormComponent
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
