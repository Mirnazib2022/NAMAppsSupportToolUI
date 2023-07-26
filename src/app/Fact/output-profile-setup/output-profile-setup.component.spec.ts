import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputProfileSetupComponent } from './output-profile-setup.component';

describe('OutputProfileSetupComponent', () => {
  let component: OutputProfileSetupComponent;
  let fixture: ComponentFixture<OutputProfileSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputProfileSetupComponent]
    });
    fixture = TestBed.createComponent(OutputProfileSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
