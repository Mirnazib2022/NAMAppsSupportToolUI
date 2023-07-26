import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTabContainerComponent } from './application-tab-container.component';

describe('ApplicationTabContainerComponent', () => {
  let component: ApplicationTabContainerComponent;
  let fixture: ComponentFixture<ApplicationTabContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationTabContainerComponent]
    });
    fixture = TestBed.createComponent(ApplicationTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
