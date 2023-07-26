import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditapplicationmodalComponent } from './addeditapplicationmodal.component';

describe('AddeditapplicationmodalComponent', () => {
  let component: AddeditapplicationmodalComponent;
  let fixture: ComponentFixture<AddeditapplicationmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditapplicationmodalComponent]
    });
    fixture = TestBed.createComponent(AddeditapplicationmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
