import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IzdavacService } from 'src/app/Services/izdavac.service';
import { Router, ActivatedRoute } from '@angular/router';
import { KnjigaService } from 'src/app/Services/knjiga.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga-izdavac-form',
  templateUrl: './knjiga-izdavac-form.component.html',
  styleUrls: ['./knjiga-izdavac-form.component.css']
})
export class KnjigaIzdavacFormComponent implements OnInit {

  public id;
  public kiForm: FormGroup;
  public izdavaci = [];
  public knjige = [];
  public izdavac;
  public knjiga;

  constructor(
    private formBuilder: FormBuilder,
    private izdavacService: IzdavacService,
    private knjigaService: KnjigaService,
    private router: Router,
    private route: ActivatedRoute) {
    this.kiForm = this.createKiForm();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getIzdavace();
    this.getKnjige();
  }

  public submit() {
    this.add();
  }
  
  
  private add() {
    this.kiForm.patchValue({IzdavacID: this.izdavac});
    this.kiForm.patchValue({KnjigaID: this.knjiga});
    this.knjigaService.addKnjiguIzdavacu(this.kiForm.value).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('izdavac');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Knjiga je uspesno dodata izdavacu!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private getIzdavace() {
    this.izdavaci.length = 0;
    this.izdavacService.getIzdavace().subscribe(res => {
      for(var izdavac of res) {
        this.izdavaci.push({label: izdavac.NazivIzdavaca, value: izdavac.IzdavacID});
      }
      console.log(this.izdavaci)
    }, err => {
      console.log(err);
    })
  }

  private getKnjige() {
    this.knjige.length = 0;
    this.knjigaService.getKnjige().subscribe(res => {
      for(var knjiga of res) {
        this.knjige.push({label: knjiga.NazivKnjige, value: knjiga.KnjigaID});
      }
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  private createKiForm() {
    return this.formBuilder.group({
      'IzdavacID':[''],
      'KnjigaID':['']
    });
  }

}
