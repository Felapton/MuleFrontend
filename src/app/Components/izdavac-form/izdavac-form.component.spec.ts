import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdavacFormComponent } from './izdavac-form.component';

describe('IzdavacFormComponent', () => {
  let component: IzdavacFormComponent;
  let fixture: ComponentFixture<IzdavacFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzdavacFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdavacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
