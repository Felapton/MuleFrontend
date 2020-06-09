import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PisacComponent } from './pisac.component';

describe('PisacComponent', () => {
  let component: PisacComponent;
  let fixture: ComponentFixture<PisacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
