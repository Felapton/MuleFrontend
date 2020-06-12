import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PisacService } from 'src/app/Services/pisac.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pisac-form',
  templateUrl: './pisac-form.component.html',
  styleUrls: ['./pisac-form.component.css']
})
export class PisacFormComponent implements OnInit {

  public id;
  public pisacForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private pisacService: PisacService,
    private router: Router,
    private route: ActivatedRoute) { 
    this.pisacForm = this.createPisacForm();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getPisac();
    }
  }

  private getPisac() {
    this.pisacService.getPisacByID(this.id).subscribe(res => {
      this.pisacForm.patchValue(res);
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
    this.pisacService.addPisca(this.pisacForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('pisac');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Pisac je uspesno dodat!',
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
          title: 'Pisac je uspesno izmenjen!',
          showConfirmButton: false,
          timer: 1500
        });
        this.pisacService.updatePisac(this.id, this.pisacForm.value).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.router.navigateByUrl('pisac');
      }
    });
  }
  
  private createPisacForm() {
    return this.formBuilder.group({
      'ImePisca':['', Validators.compose([Validators.required])],
      'PrezimePisca':['', Validators.compose([Validators.required])],
      'GodinaRodjenja':[''],
      'Nacionalnost':['']
    });
  }
  
}
  
