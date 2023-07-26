import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEdiCustomerComponent } from './add-edit-edi-customer.component';

describe('AddEditEdiCustomerComponent', () => {
  let component: AddEditEdiCustomerComponent;
  let fixture: ComponentFixture<AddEditEdiCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEdiCustomerComponent]
    });
    fixture = TestBed.createComponent(AddEditEdiCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
