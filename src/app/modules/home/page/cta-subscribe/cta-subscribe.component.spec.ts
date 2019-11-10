import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaSubscribeComponent } from './cta-subscribe.component';

describe('CtaSubscribeComponent', () => {
  let component: CtaSubscribeComponent;
  let fixture: ComponentFixture<CtaSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
