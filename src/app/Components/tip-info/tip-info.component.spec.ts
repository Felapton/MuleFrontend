import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipInfoComponent } from './tip-info.component';

describe('TipInfoComponent', () => {
  let component: TipInfoComponent;
  let fixture: ComponentFixture<TipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
