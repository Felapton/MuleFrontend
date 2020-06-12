import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NagradaService } from 'src/app/Services/nagrada.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nagrada-form',
  templateUrl: './nagrada-form.component.html',
  styleUrls: ['./nagrada-form.component.css']
})
export class NagradaFormComponent implements OnInit {

  public id;
  public nagradaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private nagradaService: NagradaService,
    private router: Router,
    private route: ActivatedRoute) {
      this.nagradaForm = this.createNagradaForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getNagrada();
    }
  }

  private getNagrada() {
    this.nagradaService.getNagradaById(this.id).subscribe(res => {
      this.nagradaForm.patchValue(res[0]);
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
    this.nagradaService.addNagradu(this.nagradaForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('nagrada');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Nagrada je uspesno dodata!',
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
          title: 'Nagrada je uspesno izmenjena!',
          showConfirmButton: false,
          timer: 1500
        });
        this.nagradaService.updateNagradu(this.id, this.nagradaForm.value).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.router.navigateByUrl('nagrada');
      }
    });
  }

  private createNagradaForm() {
    return this.formBuilder.group({
      'NagradaNaziv':['', Validators.compose([Validators.required])]
    });
  }


}
