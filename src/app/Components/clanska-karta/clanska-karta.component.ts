import { Component, OnInit } from '@angular/core';
import { ClanskaKartaService } from 'src/app/Services/clanska-karta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clanska-karta',
  templateUrl: './clanska-karta.component.html',
  styleUrls: ['./clanska-karta.component.css']
})
export class ClanskaKartaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: ClanskaKartaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      if(!this.id){
        this.getClanskeKarte();
      }
  }

  private getClanskeKarte() {
    this.data = [];
    this.svc.getClanskeKarte().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

}
