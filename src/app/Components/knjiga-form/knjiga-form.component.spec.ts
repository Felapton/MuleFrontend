import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaFormComponent } from './knjiga-form.component';

describe('KnjigaFormComponent', () => {
  let component: KnjigaFormComponent;
  let fixture: ComponentFixture<KnjigaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
