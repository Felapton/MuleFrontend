import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacFormComponent } from './kupac-form.component';

describe('KupacFormComponent', () => {
  let component: KupacFormComponent;
  let fixture: ComponentFixture<KupacFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupacFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
