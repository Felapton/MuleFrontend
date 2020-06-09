import { Component, OnInit } from '@angular/core';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  public data = [];
  public id;

  constructor(private svc: KorisnikService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(!this.id){
      this.getKorisnike();
    }
  }


  private getKorisnike() {
    this.data = [];
    this.svc.getKorisnike().subscribe(res => {
      this.data = this.data.concat(res)
    }, err => {
      console.log(err);
    });
  }
}
