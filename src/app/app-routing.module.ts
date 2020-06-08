import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnjigaComponent } from './knjiga/knjiga.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TipKnjigeComponent } from './tip-knjige/tip-knjige.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'knjiga', component: KnjigaComponent},
  {path: 'tip', component: TipKnjigeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
