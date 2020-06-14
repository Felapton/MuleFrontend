import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaProdajiFormComponent } from './knjiga-prodaji-form.component';

describe('KnjigaProdajiFormComponent', () => {
  let component: KnjigaProdajiFormComponent;
  let fixture: ComponentFixture<KnjigaProdajiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaProdajiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaProdajiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
