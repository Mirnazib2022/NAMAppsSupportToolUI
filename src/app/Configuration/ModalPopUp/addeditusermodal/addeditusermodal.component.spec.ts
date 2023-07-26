import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditusermodalComponent } from './addeditusermodal.component';

describe('AddeditusermodalComponent', () => {
  let component: AddeditusermodalComponent;
  let fixture: ComponentFixture<AddeditusermodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditusermodalComponent]
    });
    fixture = TestBed.createComponent(AddeditusermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
