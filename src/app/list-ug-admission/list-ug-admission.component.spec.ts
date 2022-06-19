import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUgAdmissionComponent } from './list-ug-admission.component';

describe('ListUgAdmissionComponent', () => {
  let component: ListUgAdmissionComponent;
  let fixture: ComponentFixture<ListUgAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUgAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUgAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
