import { Component, OnInit } from '@angular/core';
import { KnjigaService } from '../Services/knjiga.service';
import {ActivatedRoute} from '@angular/router';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css']
})
export class KnjigaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: KnjigaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getKnjige();
    }
  }

  private getKnjige() {
    this.data = [];
    this.svc.getKnjige().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

}
