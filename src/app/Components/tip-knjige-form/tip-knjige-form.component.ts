import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipKnjigeService } from 'src/app/Services/tip-knjige.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tip-knjige-form',
  templateUrl: './tip-knjige-form.component.html',
  styleUrls: ['./tip-knjige-form.component.css']
})
export class TipKnjigeFormComponent implements OnInit {

  public id;
  public tipForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private tipService: TipKnjigeService,
    private router: Router,
    private route: ActivatedRoute) { 
    this.tipForm = this.createTipForm();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if(this.id) {
      this.getTip();
    }
  }

  private getTip() {
    this.tipService.getTipKnjigeByID(this.id).subscribe(res => {
      this.tipForm.patchValue(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  public submit() {
    if(!this.id) {
      this.add();
    } else {
      this.update();
    }
  }

  private add() {
    this.tipService.addTipKnjige(this.tipForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('tip');
  }

  private update() {
    this.tipService.updateTipKnjige(this.id, this.tipForm.value).subscribe(res => {
    }, err => {
      console.log(err);
    });
    this.router.navigateByUrl('tip');
  }

  private createTipForm() {
    return this.formBuilder.group({
      'NazivTipa':['', Validators.compose([Validators.required])]
    });
  }

}
