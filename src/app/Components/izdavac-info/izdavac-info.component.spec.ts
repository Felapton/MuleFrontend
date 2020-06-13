import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdavacInfoComponent } from './izdavac-info.component';

describe('IzdavacInfoComponent', () => {
  let component: IzdavacInfoComponent;
  let fixture: ComponentFixture<IzdavacInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzdavacInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdavacInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
