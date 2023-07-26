import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleCustomerListComponent } from './oracle-customer-list.component';

describe('OracleCustomerListComponent', () => {
  let component: OracleCustomerListComponent;
  let fixture: ComponentFixture<OracleCustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OracleCustomerListComponent]
    });
    fixture = TestBed.createComponent(OracleCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
