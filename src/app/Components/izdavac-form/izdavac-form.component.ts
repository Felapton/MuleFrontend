import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IzdavacService } from 'src/app/Services/izdavac.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-izdavac-form',
  templateUrl: './izdavac-form.component.html',
  styleUrls: ['./izdavac-form.component.css']
})
export class IzdavacFormComponent implements OnInit {

  public id;
  public izdavacForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private izdavacService: IzdavacService,
    private router: Router,
    private route: ActivatedRoute) {
      this.izdavacForm = this.createIzdavacForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getIzdavac();
    }
  }

  private getIzdavac() {
    this.izdavacService.getIzdavacByID(this.id).subscribe(res => {
      this.izdavacForm.patchValue(res[0]);
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
    this.izdavacService.addIzdavaca(this.izdavacForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('izdavac');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Izdavac je uspesno dodat!',
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
          title: 'Izdavac je uspesno izmenjen!',
          showConfirmButton: false,
          timer: 1500
        });
        this.izdavacService.updateIzdavaca(this.id, this.izdavacForm.value).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.router.navigateByUrl('tip');
      }
    });
  }

  private createIzdavacForm() {
    return this.formBuilder.group({
      'NazivIzdavaca':['', Validators.compose([Validators.required])],
      'GodinaOsnivanja':['', Validators.compose([Validators.required])],
      'DrzavaOsnivanja':['', Validators.compose([Validators.required])]
    });
  }

}
