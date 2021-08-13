import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFiltersComponent } from './policy-filters.component';

describe('PolicyFiltersComponent', () => {
  let component: PolicyFiltersComponent;
  let fixture: ComponentFixture<PolicyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
