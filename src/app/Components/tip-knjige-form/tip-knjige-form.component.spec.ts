import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipKnjigeFormComponent } from './tip-knjige-form.component';

describe('TipKnjigeFormComponent', () => {
  let component: TipKnjigeFormComponent;
  let fixture: ComponentFixture<TipKnjigeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipKnjigeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipKnjigeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
