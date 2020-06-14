import { Component, OnInit } from '@angular/core';
import { KnjigaService } from 'src/app/Services/knjiga.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga-info',
  templateUrl: './knjiga-info.component.html',
  styleUrls: ['./knjiga-info.component.css']
})
export class KnjigaInfoComponent implements OnInit {

  public data = [];
  public id;
  public izdavaci = [];
  public pisci = [];
  public tipovi = [];
  public nagrade = [];

  constructor(private svc: KnjigaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getKnjiga();
    this.getPisceByKnjiga();
    this.getIzdavaceByKnjiga();
    this.getTipoveByKnjiga();
    this.getNagradeByKnjiga();
  }

  private getKnjiga() {
    this.svc.getKnjigaById(this.id).subscribe(res => {
      this.data=this.data.concat(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  private getPisceByKnjiga(){
    this.svc.getPisceByKnjiga(this.id).subscribe(res =>{
     this.pisci=this.pisci.concat(res);
     console.log(res);
    }, err=>{
       console.log(err);
    });
   }

   private getIzdavaceByKnjiga(){
    this.svc.getIzdavaceByKnjiga(this.id).subscribe(res =>{
     this.izdavaci=this.izdavaci.concat(res);
     console.log(res);
    }, err=>{
       console.log(err);
    });
   }

   private getNagradeByKnjiga(){
    this.svc.getNagradeByKnjiga(this.id).subscribe(res =>{
     this.nagrade=this.nagrade.concat(res);
     console.log(res);
    }, err=>{
       console.log(err);
    });
   }

   private getTipoveByKnjiga(){
    this.svc.getTipoveByKnjiga(this.id).subscribe(res =>{
     this.tipovi=this.tipovi.concat(res);
     console.log(res);
    }, err=>{
       console.log(err);
    });
   }

   public delete(id, index) {
    Swal.fire({
      title: 'Da li ste sigurni?',
      text: "Kada obrisete necete moci da vratite podatke!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da, izbrisi!'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Knjiga je uspesno izbrisana!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteKnjigu(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
        this.router.navigateByUrl('knjiga');
      }
    });
  }

}
