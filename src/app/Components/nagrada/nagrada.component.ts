import { Component, OnInit } from '@angular/core';
import { NagradaService } from 'src/app/Services/nagrada.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nagrada',
  templateUrl: './nagrada.component.html',
  styleUrls: ['./nagrada.component.css']
})
export class NagradaComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: NagradaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getNagrade();
    }
  }

  private getNagrade() {
    this.data = [];
    this.svc.getNagrade().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }

}
