import { Component, OnInit } from '@angular/core';
import { ClanskaKartaService } from 'src/app/Services/clanska-karta.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clanska-karta',
  templateUrl: './clanska-karta.component.html',
  styleUrls: ['./clanska-karta.component.css']
})
export class ClanskaKartaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: ClanskaKartaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      if(!this.id){
        this.getClanskeKarte();
      }
  }

  private getClanskeKarte() {
    this.data = [];
    this.svc.getClanskeKarte().subscribe(res => {
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
          title: 'Clanska Karta je uspesno izbrisana!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteClansku(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
      }
    });
  }
}
