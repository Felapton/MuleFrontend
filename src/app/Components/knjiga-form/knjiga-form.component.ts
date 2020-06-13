import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KnjigaService } from 'src/app/Services/knjiga.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga-form',
  templateUrl: './knjiga-form.component.html',
  styleUrls: ['./knjiga-form.component.css']
})
export class KnjigaFormComponent implements OnInit {

  public id;
  public knjigaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private knjigaService: KnjigaService,
    private router: Router,
    private route: ActivatedRoute) {
      this.knjigaForm = this.createKnjigaForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getKnjiga();
    }
  }

  private getKnjiga() {
    this.knjigaService.getKnjigaById(this.id).subscribe(res => {
      this.knjigaForm.patchValue(res[0]);
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
    this.knjigaService.addKnjigu(this.knjigaForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('knjiga');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Knjiga je uspesno dodata!',
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
          title: 'Knjiga je uspesno izmenjena!',
          showConfirmButton: false,
          timer: 1500
        });
        this.knjigaService.updateKnjigu(this.id, this.knjigaForm.value).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.router.navigateByUrl('knjiga');
      }
    });
  }

  
  private createKnjigaForm() {
    return this.formBuilder.group({
      'NazivKnjige':['', Validators.compose([Validators.required])],
      'Cena':['', Validators.compose([Validators.required])],
      'KolicinaNaStanju':['', Validators.compose([Validators.required])]
    });
  }

}
