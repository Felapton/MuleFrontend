import { Component, OnInit } from '@angular/core';
import { KupacService } from 'src/app/Services/kupac.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: KupacService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getKupce();
    }
  }


  private getKupce() {
    this.data = [];
    this.svc.getKupce().subscribe(res => {
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
          title: 'Kupac je uspesno izbrisan!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteKupca(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
      }
    });
  }

}
