import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaPiscuFormComponent } from './knjiga-piscu-form.component';

describe('KnjigaPiscuFormComponent', () => {
  let component: KnjigaPiscuFormComponent;
  let fixture: ComponentFixture<KnjigaPiscuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnjigaPiscuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaPiscuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
