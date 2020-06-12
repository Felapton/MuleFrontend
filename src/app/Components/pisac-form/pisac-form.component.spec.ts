import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PisacFormComponent } from './pisac-form.component';

describe('PisacFormComponent', () => {
  let component: PisacFormComponent;
  let fixture: ComponentFixture<PisacFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisacFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
