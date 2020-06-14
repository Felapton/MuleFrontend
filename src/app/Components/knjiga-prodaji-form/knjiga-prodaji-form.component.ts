import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdajaService } from 'src/app/Services/prodaja.service';
import { KnjigaService } from 'src/app/Services/knjiga.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga-prodaji-form',
  templateUrl: './knjiga-prodaji-form.component.html',
  styleUrls: ['./knjiga-prodaji-form.component.css']
})
export class KnjigaProdajiFormComponent implements OnInit {

  public id;
  public kpForm: FormGroup;
  public knjige = [];
  public knjiga;
  public prodaja;

  constructor(private formBuilder: FormBuilder,
    private prodajaService: ProdajaService,
    private knjigaService: KnjigaService,
    private router: Router,
    private route: ActivatedRoute) {
      this.kpForm = this.createKpForm();
    }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      this.getKnjige();
  }

  public submit() {
    this.add();
  }

  private add() {
    this.kpForm.patchValue({ProdajaID: this.id});
    this.kpForm.patchValue({KnjigaID: this.knjiga});
    this.knjigaService.addKnjiguProdaji(this.kpForm.value).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('prodaja/'+ this.id);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Knjiga je uspesno dodata prodaji!',
      showConfirmButton: false,
      timer: 1500
    });
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

  private createKpForm() {
    return this.formBuilder.group({
      'ProdajaID':[''],
      'KnjigaID':[''],
      'KolicinaKupljenih':['',Validators.compose([Validators.required])]
    });
  }

}
