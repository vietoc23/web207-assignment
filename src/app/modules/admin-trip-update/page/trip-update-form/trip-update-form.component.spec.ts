import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripUpdateFormComponent } from './trip-update-form.component';

describe('TripUpdateFormComponent', () => {
  let component: TripUpdateFormComponent;
  let fixture: ComponentFixture<TripUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
