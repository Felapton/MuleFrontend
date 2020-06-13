import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdajaService } from 'src/app/Services/prodaja.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { KupacService } from 'src/app/Services/kupac.service';

@Component({
  selector: 'app-prodaja-form',
  templateUrl: './prodaja-form.component.html',
  styleUrls: ['./prodaja-form.component.css']
})
export class ProdajaFormComponent implements OnInit {
  
  public id;
  public prodajaForm: FormGroup;
  public korisnici = [];
  public kupci = [];
  public korisnik;
  public kupac;

  constructor(
    private formBuilder: FormBuilder,
    private prodajaService: ProdajaService,
    private korisnikService: KorisnikService,
    private kupacService: KupacService,
    private router: Router,
    private route: ActivatedRoute) {
    this.prodajaForm = this.createProdajaForm();
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getProdaja();
    }
    this.getKorisnike();
    this.getKupce();
  }

  private getProdaja() {
    this.prodajaService.getProdajaById(this.id).subscribe(res => {
      this.prodajaForm.patchValue(res[0]);
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
    console.log(this.korisnik)

    this.prodajaForm.patchValue({KorisnikID: this.korisnik});
    this.prodajaForm.patchValue({KupacID: this.kupac});
    console.log(this.prodajaForm.value);
    this.prodajaService.addProdaju(this.prodajaForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('prodaja');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Prodaja je uspesno dodata!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private update() {
    this.prodajaForm.patchValue({KorisnikID: this.korisnik});
    this.prodajaForm.patchValue({KupacID: this.kupac});
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
        this.prodajaService.updateProdaju(this.id, this.prodajaForm.value).subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
        this.router.navigateByUrl('prodaja');
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

  private createProdajaForm() {
    return this.formBuilder.group({
      'Datum':[new Date(Date.now()).toISOString().substr(0,20)],
      'UkupnaCena':['', Validators.compose([Validators.required])],
      'KorisnikID':[''],
      'KupacID':['']
    });
  }

}
