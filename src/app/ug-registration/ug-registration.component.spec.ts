import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgRegistrationComponent } from './ug-registration.component';

describe('UgRegistrationComponent', () => {
  let component: UgRegistrationComponent;
  let fixture: ComponentFixture<UgRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
