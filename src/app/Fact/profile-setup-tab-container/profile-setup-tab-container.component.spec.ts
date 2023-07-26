import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSetupTabContainerComponent } from './profile-setup-tab-container.component';

describe('ProfileSetupTabContainerComponent', () => {
  let component: ProfileSetupTabContainerComponent;
  let fixture: ComponentFixture<ProfileSetupTabContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSetupTabContainerComponent]
    });
    fixture = TestBed.createComponent(ProfileSetupTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
