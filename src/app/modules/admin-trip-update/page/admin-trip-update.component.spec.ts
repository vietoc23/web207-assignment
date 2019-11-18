import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTripUpdateComponent } from './admin-trip-update.component';

describe('AdminTripUpdateComponent', () => {
  let component: AdminTripUpdateComponent;
  let fixture: ComponentFixture<AdminTripUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTripUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTripUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
