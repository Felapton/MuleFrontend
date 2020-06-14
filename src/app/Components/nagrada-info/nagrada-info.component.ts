import { Component, OnInit } from '@angular/core';
import { NagradaService } from 'src/app/Services/nagrada.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nagrada-info',
  templateUrl: './nagrada-info.component.html',
  styleUrls: ['./nagrada-info.component.css']
})
export class NagradaInfoComponent implements OnInit {

  public data = [];
  public id;
  public knjige = [];

  constructor(private svc: NagradaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getNagrada();
    this.getKnjigeByNagrada();
  }

  private getNagrada() {
    this.svc.getNagradaById(this.id).subscribe(res => {
      this.data=this.data.concat(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  private getKnjigeByNagrada(){
    this.svc.getKnjigeByNagrada(this.id).subscribe(res =>{
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
          title: 'Nagrada je uspesno izbrisana!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteNagradu(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
        this.router.navigateByUrl('nagrada');
      }
    });
  }

}
