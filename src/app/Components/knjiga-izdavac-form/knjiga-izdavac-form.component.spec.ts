import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaIzdavacFormComponent } from './knjiga-izdavac-form.component';

describe('KnjigaIzdavacFormComponent', () => {
  let component: KnjigaIzdavacFormComponent;
  let fixture: ComponentFixture<KnjigaIzdavacFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaIzdavacFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaIzdavacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
