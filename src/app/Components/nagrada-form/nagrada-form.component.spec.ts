import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagradaFormComponent } from './nagrada-form.component';

describe('NagradaFormComponent', () => {
  let component: NagradaFormComponent;
  let fixture: ComponentFixture<NagradaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagradaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagradaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
