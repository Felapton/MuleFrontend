import { Component, OnInit } from '@angular/core';
import { NagradaService } from 'src/app/Services/nagrada.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nagrada',
  templateUrl: './nagrada.component.html',
  styleUrls: ['./nagrada.component.css']
})
export class NagradaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: NagradaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getNagrade();
    }
  }

  private getNagrade() {
    this.data = [];
    this.svc.getNagrade().subscribe(res => {
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
          title: 'Nagrada je uspesno izbrisana!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteNagradu(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
      }
    });
  }

}
