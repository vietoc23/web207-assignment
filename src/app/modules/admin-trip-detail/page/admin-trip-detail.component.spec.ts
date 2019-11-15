import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTripDetailComponent } from './admin-trip-detail.component';

describe('AdminTripDetailComponent', () => {
  let component: AdminTripDetailComponent;
  let fixture: ComponentFixture<AdminTripDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTripDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTripDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
