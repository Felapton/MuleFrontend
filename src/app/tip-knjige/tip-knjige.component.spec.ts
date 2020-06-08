import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipKnjigeComponent } from './tip-knjige.component';

describe('TipKnjigeComponent', () => {
  let component: TipKnjigeComponent;
  let fixture: ComponentFixture<TipKnjigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipKnjigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipKnjigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
