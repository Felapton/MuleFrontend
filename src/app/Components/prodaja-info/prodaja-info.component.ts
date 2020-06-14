import { Component, OnInit } from '@angular/core';
import { ProdajaService } from 'src/app/Services/prodaja.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prodaja-info',
  templateUrl: './prodaja-info.component.html',
  styleUrls: ['./prodaja-info.component.css']
})
export class ProdajaInfoComponent implements OnInit {
  public data = [];
  public id;
  public knjige = [];

  constructor(private svc: ProdajaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getProdaja();
    this.getKnjigeByProdaja();
  }

  private getProdaja() {
    this.svc.getProdajaById(this.id).subscribe(res => {
      this.data=this.data.concat(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  private getKnjigeByProdaja(){
    this.svc.getKnjigeByProdaja(this.id).subscribe(res =>{
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
          title: 'Prodaja je uspesno izbrisana!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteProdaju(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
        this.router.navigateByUrl('prodaja');
      }
    });
  }

}
