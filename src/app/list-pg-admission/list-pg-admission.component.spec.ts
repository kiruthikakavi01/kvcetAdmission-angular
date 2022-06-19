import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPgAdmissionComponent } from './list-pg-admission.component';

describe('ListPgAdmissionComponent', () => {
  let component: ListPgAdmissionComponent;
  let fixture: ComponentFixture<ListPgAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPgAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPgAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
