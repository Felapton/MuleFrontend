import { Component, OnInit } from '@angular/core';
import { KnjigaService } from '../../Services/knjiga.service';
import {ActivatedRoute} from '@angular/router';
import { fromEventPattern } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css']
})
export class KnjigaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: KnjigaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getKnjige();
    }
  }

  private getKnjige() {
    this.data = [];
    this.svc.getKnjige().subscribe(res => {
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
          title: 'Knjiga je uspesno izbrisana!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteKnjigu(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
      }
    });
  }

}
