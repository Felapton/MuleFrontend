import { Component, OnInit } from '@angular/core';
import { PisacService } from 'src/app/Services/pisac.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pisac',
  templateUrl: './pisac.component.html',
  styleUrls: ['./pisac.component.css']
})
export class PisacComponent implements OnInit {

  public data = [];
  public id;


  constructor(private svc: PisacService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      if(!this.id){
        this.getPisce();
      }
  }


  private getPisce() {
    this.data = [];
    this.svc.getPisce().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }
}
