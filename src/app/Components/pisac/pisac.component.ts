import { Component, OnInit } from '@angular/core';
import { PisacService } from 'src/app/Services/pisac.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pisac',
  templateUrl: './pisac.component.html',
  styleUrls: ['./pisac.component.css']
})
export class PisacComponent implements OnInit {

  public data = [];
  public id;


  constructor(private svc: PisacService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      if(!this.id){
        this.getPisce();
      }
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

  private getPisce() {
    this.data = [];
    this.svc.getPisce().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }
}
