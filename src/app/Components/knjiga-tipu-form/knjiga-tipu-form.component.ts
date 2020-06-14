import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipKnjigeService } from 'src/app/Services/tip-knjige.service';
import { KnjigaService } from 'src/app/Services/knjiga.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga-tipu-form',
  templateUrl: './knjiga-tipu-form.component.html',
  styleUrls: ['./knjiga-tipu-form.component.css']
})
export class KnjigaTipuFormComponent implements OnInit {

  public id;
  public ktForm: FormGroup;
  public tipovi = [];
  public knjige = [];
  public tip;
  public knjiga;

  constructor(private formBuilder: FormBuilder,
    private tipService: TipKnjigeService,
    private knjigaService: KnjigaService,
    private router: Router,
    private route: ActivatedRoute) {
      this.ktForm = this.createKtForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getTipove();
    this.getKnjige();
  }

  public submit() {
    this.add();
  }

  private add() {
    this.ktForm.patchValue({TipID: this.tip});
    this.ktForm.patchValue({KnjigaID: this.knjiga});
    this.knjigaService.addKnjiguTipu(this.ktForm.value).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('knjiga');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tip je uspesno dodat za knjigu!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private getTipove() {
    this.tipovi.length = 0;
    this.tipService.getTipKnjige().subscribe(res => {
      for(var tip of res) {
        this.tipovi.push({label: tip.NazivTipa, value: tip.TipID});
      }
      console.log(this.tipovi)
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

  private createKtForm() {
    return this.formBuilder.group({
      'TipID':[''],
      'KnjigaID':['']
    });
  }

}
