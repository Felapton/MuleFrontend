import { Component, OnInit } from '@angular/core';
import { IzdavacService } from 'src/app/Services/izdavac.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-izdavac-info',
  templateUrl: './izdavac-info.component.html',
  styleUrls: ['./izdavac-info.component.css']
})
export class IzdavacInfoComponent implements OnInit {

  public data = [];
  public id;
  public knjige = [];

  constructor(private svc: IzdavacService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getIzdavac();
    this.getKnjigeByIzdavac();
  }

  private getIzdavac() {
    this.svc.getIzdavacByID(this.id).subscribe(res => {
      this.data=this.data.concat(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  private getKnjigeByIzdavac(){
    this.svc.getKnjigeByIzdavac(this.id).subscribe(res =>{
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
          title: 'Izdavac je uspesno izbrisan!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteIzdavaca(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
        this.router.navigateByUrl('izdavac');
      }
    });
  }

}
