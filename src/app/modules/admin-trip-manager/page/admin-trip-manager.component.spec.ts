import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTripManagerComponent } from './admin-trip-manager.component';

describe('AdminTripManagerComponent', () => {
  let component: AdminTripManagerComponent;
  let fixture: ComponentFixture<AdminTripManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTripManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTripManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
