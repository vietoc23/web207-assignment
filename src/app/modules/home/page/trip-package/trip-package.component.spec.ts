import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPackageComponent } from './trip-package.component';

describe('TripPackageComponent', () => {
  let component: TripPackageComponent;
  let fixture: ComponentFixture<TripPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
