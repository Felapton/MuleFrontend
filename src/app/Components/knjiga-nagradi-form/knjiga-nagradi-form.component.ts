import { Component, OnInit } from '@angular/core';
import { NagradaService } from 'src/app/Services/nagrada.service';
import { KnjigaService } from 'src/app/Services/knjiga.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga-nagradi-form',
  templateUrl: './knjiga-nagradi-form.component.html',
  styleUrls: ['./knjiga-nagradi-form.component.css']
})
export class KnjigaNagradiFormComponent implements OnInit {

  public id;
  public knForm: FormGroup;
  public nagrade = [];
  public knjige = [];
  public nagrada;
  public knjiga;

  constructor(private formBuilder: FormBuilder,
    private nagradaService: NagradaService,
    private knjigaService: KnjigaService,
    private router: Router,
    private route: ActivatedRoute) {
      this.knForm = this.createKnForm();
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getNagrade();
    this.getKnjige();
  }

  public submit() {
    this.add();
  }

  private add() {
    this.knForm.patchValue({NagradaID: this.nagrada});
    this.knForm.patchValue({KnjigaID: this.knjiga});
    this.knjigaService.addKnjiguNagradi(this.knForm.value).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('nagrada');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Knjiga je uspesno dodata izdavacu!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private getNagrade() {
    this.nagrade.length = 0;
    this.nagradaService.getNagrade().subscribe(res => {
      for(var nagrada of res) {
        this.nagrade.push({label: nagrada.NagradaNaziv, value: nagrada.NagradaID});
      }
      console.log(this.nagrade)
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

  private createKnForm() {
    return this.formBuilder.group({
      'NagradaID':[''],
      'KnjigaID':[''],
      'GodinaOsvajanja':['', Validators.compose([Validators.required])]
    });
  }

}
