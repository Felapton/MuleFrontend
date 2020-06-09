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

  private getTipKnjige() {
    this.data = [];
    this.svc.getTipKnjige().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

  private addTipKnjige(result){
    const data = {NazivTipa: result[0]};
    this.svc.addTipKnjige(data).subscribe(res => {
      Swal.fire({
        title: 'You have successfully added ' + result[0],
        icon: 'success'
      });
      this.getTipKnjige();
    }, err => {
      console.log(err);
    });
  }
}
