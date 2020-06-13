import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PisacInfoComponent } from './pisac-info.component';

describe('PisacInfoComponent', () => {
  let component: PisacInfoComponent;
  let fixture: ComponentFixture<PisacInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisacInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisacInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
