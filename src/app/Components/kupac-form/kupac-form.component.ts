import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KupacService } from 'src/app/Services/kupac.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kupac-form',
  templateUrl: './kupac-form.component.html',
  styleUrls: ['./kupac-form.component.css']
})
export class KupacFormComponent implements OnInit {

  public id;
  public kupacForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private kupacService: KupacService,
    private router: Router,
    private route: ActivatedRoute) {
      this.kupacForm = this.createKupacForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getKupac();
    }
  }

  private getKupac() {
    this.kupacService.getKupacByID(this.id).subscribe(res => {
      this.kupacForm.patchValue(res[0]);
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
    this.kupacService.addKupca(this.kupacForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('kupac');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Kupac je uspesno dodat!',
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Kupac je uspesno izmenjen!',
          showConfirmButton: false,
          timer: 1500
        });
        this.kupacService.updateKupca(this.id, this.kupacForm.value).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.router.navigateByUrl('kupac');
      }
    });
  }

  private createKupacForm() {
    return this.formBuilder.group({
      'ImeKupca':['', Validators.compose([Validators.required])],
      'PrezimeKupca':['', Validators.compose([Validators.required])],
      'AdresaKupca':['', Validators.compose([Validators.required])],
      'GradKupca':['', Validators.compose([Validators.required])],
      'KontaktKupca':['', Validators.compose([Validators.required])],
      'EMailKupca':['', Validators.compose([Validators.required])]
    });
  }

}
