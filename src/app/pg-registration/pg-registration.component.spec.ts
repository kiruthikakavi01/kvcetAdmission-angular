import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgRegistrationComponent } from './pg-registration.component';

describe('PgRegistrationComponent', () => {
  let component: PgRegistrationComponent;
  let fixture: ComponentFixture<PgRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
