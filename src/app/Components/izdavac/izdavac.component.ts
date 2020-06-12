import { Component, OnInit } from '@angular/core';
import { IzdavacService } from 'src/app/Services/izdavac.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-izdavac',
  templateUrl: './izdavac.component.html',
  styleUrls: ['./izdavac.component.css']
})
export class IzdavacComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: IzdavacService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getIzdavace();
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
          title: 'Izdavac je uspesno izbrisan!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteIzdavaca(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index);
      }
    });
  }

  private getIzdavace() {
    this.data = [];
    this.svc.getIzdavace().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

}
