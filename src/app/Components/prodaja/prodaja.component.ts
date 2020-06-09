import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdajaService } from 'src/app/Services/prodaja.service';

@Component({
  selector: 'app-prodaja',
  templateUrl: './prodaja.component.html',
  styleUrls: ['./prodaja.component.css']
})
export class ProdajaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: ProdajaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getProdaje();
    }
  }
  private getProdaje() {
    this.data = [];
    this.svc.getProdaje().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

}
