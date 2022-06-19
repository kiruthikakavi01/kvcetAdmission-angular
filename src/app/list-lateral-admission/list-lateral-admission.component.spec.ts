import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLateralAdmissionComponent } from './list-lateral-admission.component';

describe('ListLateralAdmissionComponent', () => {
  let component: ListLateralAdmissionComponent;
  let fixture: ComponentFixture<ListLateralAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLateralAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLateralAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
