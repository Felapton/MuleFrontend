import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanskaKartaFormComponent } from './clanska-karta-form.component';

describe('ClanskaKartaFormComponent', () => {
  let component: ClanskaKartaFormComponent;
  let fixture: ComponentFixture<ClanskaKartaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanskaKartaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanskaKartaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
