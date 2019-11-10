import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPackageItemComponent } from './trip-package-item.component';

describe('TripPackageItemComponent', () => {
  let component: TripPackageItemComponent;
  let fixture: ComponentFixture<TripPackageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPackageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
