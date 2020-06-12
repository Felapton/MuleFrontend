import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-korisnik-form',
  templateUrl: './korisnik-form.component.html',
  styleUrls: ['./korisnik-form.component.css']
})
export class KorisnikFormComponent implements OnInit {

  public id;
  public korisnikForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private korisnikService: KorisnikService,
    private router: Router,
    private route: ActivatedRoute) {
      this.korisnikForm = this.createKorisnikForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getKorisnika();
    }
  }

  private getKorisnika() {
    this.korisnikService.getKorisnikByID(this.id).subscribe(res => {
      this.korisnikForm.patchValue(res[0]);
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
    this.korisnikService.addKorisnike(this.korisnikForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('korisnik');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Korisnik je uspesno dodat!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private update() {
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
        this.korisnikService.updateKorisnika(this.id, this.korisnikForm.value).subscribe(res => {
        }, err => {
          console.log(err);
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Korisnik je uspesno izmenjen!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('korisnik');
      }
    });
  }

  private createKorisnikForm() {
    return this.formBuilder.group({
      'Username':['', Validators.compose([Validators.required])],
      'Password':['', Validators.compose([Validators.required])],
      'ImeKorisnika':['', Validators.compose([Validators.required])],
      'PrezimeKorisnika':['', Validators.compose([Validators.required])],
      'AdresaKorisnika':['', Validators.compose([Validators.required])],
      'GradKorisnika':['', Validators.compose([Validators.required])],
      'KontaktKorisnika':['', Validators.compose([Validators.required])],
      'EMailKorisnika':['', Validators.compose([Validators.required])]
    });
  }

}
