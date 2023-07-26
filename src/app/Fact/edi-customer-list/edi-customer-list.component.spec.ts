import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiCustomerListComponent } from './edi-customer-list.component';

describe('EdiCustomerListComponent', () => {
  let component: EdiCustomerListComponent;
  let fixture: ComponentFixture<EdiCustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdiCustomerListComponent]
    });
    fixture = TestBed.createComponent(EdiCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
