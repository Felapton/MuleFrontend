import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClanskaKartaService } from 'src/app/Services/clanska-karta.service';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { KupacService } from 'src/app/Services/kupac.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clanska-karta-form',
  templateUrl: './clanska-karta-form.component.html',
  styleUrls: ['./clanska-karta-form.component.css']
})
export class ClanskaKartaFormComponent implements OnInit {

  public id;
  public clanskaForm: FormGroup;
  public korisnici = [];
  public kupci = [];
  public korisnik;
  public kupac;
  
  constructor(private formBuilder: FormBuilder,
    private clanskaService: ClanskaKartaService,
    private korisnikService: KorisnikService,
    private kupacService: KupacService,
    private router: Router,
    private route: ActivatedRoute) {
      this.clanskaForm = this.createClanskaForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getClanska();
    }
    this.getKorisnike();
    this.getKupce();
  }

  private getClanska() {
    this.clanskaService.getClanskuByID(this.id).subscribe(res => {
      this.clanskaForm.patchValue(res[0]);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  public submit() {
    if(!this.id) {
      this.add();
    } else {
      this.update();
    }
  }

  private add() {
    this.clanskaForm.patchValue({KorisnikID: this.korisnik});
    this.clanskaForm.patchValue({KupacID: this.kupac});
    this.clanskaService.addClansku(this.clanskaForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('clanska');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Clanska karta je uspesno dodata!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private update() {
    this.clanskaForm.patchValue({KorisnikID: this.korisnik});
    this.clanskaForm.patchValue({KupacID: this.kupac});
    Swal.fire({
      title: 'Da li ste sigurni?',
      text: "Kada izmenite necete moci da vratite podatke!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da, izmeni!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Prodaja je uspesno izmenjena!',
          showConfirmButton: false,
          timer: 1500
        });
        this.clanskaService.updateClansku(this.id, this.clanskaForm.value).subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
        this.router.navigateByUrl('clanska');
      }
    });
  }

  private getKorisnike() {
    this.korisnici.length = 0;
    this.korisnikService.getKorisnike().subscribe(res => {
      for(var korisnik of res) {
        this.korisnici.push({label: korisnik.ImeKorisnika + ' ' + korisnik.PrezimeKorisnika, value: korisnik.KorisnikID});
      }
      console.log(this.korisnici)
    }, err => {
      console.log(err);
    })
  }

  private getKupce() {
    this.kupci.length = 0;
    this.kupacService.getKupce().subscribe(res => {
      for(var kupac of res) {
        this.kupci.push({label: kupac.ImeKupca + ' ' + kupac.PrezimeKupca, value: kupac.KupacID});
      }
    }, err => {
      console.log(err);
    });
  }

  private createClanskaForm() {
    return this.formBuilder.group({
      'BrojClanskeKarte':['',Validators.compose([Validators.required])],
      'VremeIsteka':['', Validators.compose([Validators.required])],
      'KorisnikID':[''],
      'KupacID':['']
    });
  }

}
