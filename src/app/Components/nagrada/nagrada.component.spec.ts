import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagradaComponent } from './nagrada.component';

describe('NagradaComponent', () => {
  let component: NagradaComponent;
  let fixture: ComponentFixture<NagradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
