import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdajaFormComponent } from './prodaja-form.component';

describe('ProdajaFormComponent', () => {
  let component: ProdajaFormComponent;
  let fixture: ComponentFixture<ProdajaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdajaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdajaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
