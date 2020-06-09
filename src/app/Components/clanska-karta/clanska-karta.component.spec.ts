import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanskaKartaComponent } from './clanska-karta.component';

describe('ClanskaKartaComponent', () => {
  let component: ClanskaKartaComponent;
  let fixture: ComponentFixture<ClanskaKartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanskaKartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanskaKartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
