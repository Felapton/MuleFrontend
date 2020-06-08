import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipKnjigeService } from '../Services/tip-knjige.service';

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
}
