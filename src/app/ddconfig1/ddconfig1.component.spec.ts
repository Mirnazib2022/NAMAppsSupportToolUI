import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ddconfig1Component } from './ddconfig1.component';

describe('Ddconfig1Component', () => {
  let component: Ddconfig1Component;
  let fixture: ComponentFixture<Ddconfig1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ddconfig1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ddconfig1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
