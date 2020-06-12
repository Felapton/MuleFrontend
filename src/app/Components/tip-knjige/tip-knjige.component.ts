import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipKnjigeService } from '../../Services/tip-knjige.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tip-knjige',
  templateUrl: './tip-knjige.component.html',
  styleUrls: ['./tip-knjige.component.css']
})
export class TipKnjigeComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: TipKnjigeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getTipKnjige();
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
          title: 'Tip knjige je uspesno izbrisan!',
          showConfirmButton: false,
          timer: 1500
        });
        this.svc.deleteTipKnjige(id).subscribe(res => {
        }, err => {
          console.log(err);
        });
        this.data.splice(index,1);
      }
    });
  }

  private getTipKnjige() {
    this.data = [];
    this.svc.getTipKnjige().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

}
