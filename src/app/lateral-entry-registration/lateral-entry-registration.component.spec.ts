import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralEntryRegistrationComponent } from './lateral-entry-registration.component';

describe('LateralEntryRegistrationComponent', () => {
  let component: LateralEntryRegistrationComponent;
  let fixture: ComponentFixture<LateralEntryRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralEntryRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralEntryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
