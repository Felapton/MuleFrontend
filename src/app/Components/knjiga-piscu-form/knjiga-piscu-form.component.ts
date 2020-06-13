import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { KnjigaService } from 'src/app/Services/knjiga.service';
import { PisacService } from 'src/app/Services/pisac.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga-piscu-form',
  templateUrl: './knjiga-piscu-form.component.html',
  styleUrls: ['./knjiga-piscu-form.component.css']
})
export class KnjigaPiscuFormComponent implements OnInit {

  public id;
  public kpForm: FormGroup;
  public pisci = [];
  public knjige = [];
  public pisac;
  public knjiga;

  constructor(private formBuilder: FormBuilder,
    private pisacService: PisacService,
    private knjigaService: KnjigaService,
    private router: Router,
    private route: ActivatedRoute) {
      this.kpForm = this.createKpForm();
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getPisce();
    this.getKnjige();
  }

  public submit() {
      this.add();
  }

  private add() {
    this.kpForm.patchValue({PisacID: this.pisac});
    this.kpForm.patchValue({KnjigaID: this.knjiga});
    this.knjigaService.addKnjiguPiscu(this.kpForm.value).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('pisac');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Knjiga je uspesno dodata piscu!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  private getPisce() {
    this.pisci.length = 0;
    this.pisacService.getPisce().subscribe(res => {
      for(var pisac of res) {
        this.pisci.push({label: pisac.ImePisca + ' ' +pisac.PrezimePisca, value: pisac.PisacID});
      }
      console.log(this.pisci)
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

  private createKpForm() {
    return this.formBuilder.group({
      'PisacID':[''],
      'KnjigaID':['']
    });
  }

}
