import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikFormComponent } from './korisnik-form.component';

describe('KorisnikFormComponent', () => {
  let component: KorisnikFormComponent;
  let fixture: ComponentFixture<KorisnikFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
