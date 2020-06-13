import { Component, OnInit } from '@angular/core';
import { TipKnjigeService } from 'src/app/Services/tip-knjige.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tip-info',
  templateUrl: './tip-info.component.html',
  styleUrls: ['./tip-info.component.css']
})
export class TipInfoComponent implements OnInit {

  public data = [];
  public id;
  public knjige = [];

  constructor(private svc: TipKnjigeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getTip();
    this.getKnjigeByTip();
  }

  private getTip() {
    this.svc.getTipKnjigeByID(this.id).subscribe(res => {
      this.data=this.data.concat(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  private getKnjigeByTip(){
    this.svc.getKnjigeByTip(this.id).subscribe(res =>{
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
          title: 'Pisac je uspesno izbrisan!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteTipKnjige(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
        this.router.navigateByUrl('tip');
      }
    });
  }


}
