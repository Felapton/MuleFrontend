import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdajaInfoComponent } from './prodaja-info.component';

describe('ProdajaInfoComponent', () => {
  let component: ProdajaInfoComponent;
  let fixture: ComponentFixture<ProdajaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdajaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdajaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
