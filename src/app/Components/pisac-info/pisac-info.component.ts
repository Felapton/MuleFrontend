import { Component, OnInit } from '@angular/core';
import { PisacService } from 'src/app/Services/pisac.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pisac-info',
  templateUrl: './pisac-info.component.html',
  styleUrls: ['./pisac-info.component.css']
})
export class PisacInfoComponent implements OnInit {

  public data = [];
  public id;
  public knjige = [];

  constructor(private svc: PisacService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getPisac();
    this.getKnjigeByPisac();
  }

  private getPisac() {
    this.svc.getPisacByID(this.id).subscribe(res => {
      this.data=this.data.concat(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  private getKnjigeByPisac(){
   this.svc.getKnjigeByPisac(this.id).subscribe(res =>{
    this.knjige=this.knjige.concat(res);
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
          title: 'Pisac je uspesno izbrisan!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deletePisca(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
      }
    });
  }

}
