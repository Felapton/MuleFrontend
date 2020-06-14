import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagradaInfoComponent } from './nagrada-info.component';

describe('NagradaInfoComponent', () => {
  let component: NagradaInfoComponent;
  let fixture: ComponentFixture<NagradaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagradaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagradaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
