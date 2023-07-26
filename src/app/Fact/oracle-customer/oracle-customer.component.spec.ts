import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleCustomerComponent } from './oracle-customer.component';

describe('OracleCustomerComponent', () => {
  let component: OracleCustomerComponent;
  let fixture: ComponentFixture<OracleCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OracleCustomerComponent]
    });
    fixture = TestBed.createComponent(OracleCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
