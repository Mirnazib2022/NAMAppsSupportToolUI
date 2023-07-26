import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiCustomerTabContainerComponent } from './edi-customer-tab-container.component';

describe('EdiCustomerTabContainerComponent', () => {
  let component: EdiCustomerTabContainerComponent;
  let fixture: ComponentFixture<EdiCustomerTabContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdiCustomerTabContainerComponent]
    });
    fixture = TestBed.createComponent(EdiCustomerTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
