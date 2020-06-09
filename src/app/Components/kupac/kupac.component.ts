import { Component, OnInit } from '@angular/core';
import { KupacService } from 'src/app/Services/kupac.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: KupacService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getKupce();
    }
  }


  private getKupce() {
    this.data = [];
    this.svc.getKupce().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

}
