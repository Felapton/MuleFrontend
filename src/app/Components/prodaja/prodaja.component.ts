import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdajaService } from 'src/app/Services/prodaja.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prodaja',
  templateUrl: './prodaja.component.html',
  styleUrls: ['./prodaja.component.css']
})
export class ProdajaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: ProdajaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getProdaje();
    }
  }
  private getProdaje() {
    this.data = [];
    this.svc.getProdaje().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
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
          title: 'Izdavac je uspesno izbrisan!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteProdaju(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
      }
    });
  }
}
