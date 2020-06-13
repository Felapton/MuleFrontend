import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaNagradiFormComponent } from './knjiga-nagradi-form.component';

describe('KnjigaNagradiFormComponent', () => {
  let component: KnjigaNagradiFormComponent;
  let fixture: ComponentFixture<KnjigaNagradiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaNagradiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaNagradiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
