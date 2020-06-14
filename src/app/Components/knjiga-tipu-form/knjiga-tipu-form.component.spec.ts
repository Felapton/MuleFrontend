import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaTipuFormComponent } from './knjiga-tipu-form.component';

describe('KnjigaTipuFormComponent', () => {
  let component: KnjigaTipuFormComponent;
  let fixture: ComponentFixture<KnjigaTipuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaTipuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaTipuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
