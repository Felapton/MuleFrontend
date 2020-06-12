import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdavacComponent } from './izdavac.component';

describe('IzdavacComponent', () => {
  let component: IzdavacComponent;
  let fixture: ComponentFixture<IzdavacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzdavacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdavacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
