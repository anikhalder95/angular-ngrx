import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDocumentsPackageComponent } from './policy-documents-package.component';

describe('PolicyDocumentsPackageComponent', () => {
  let component: PolicyDocumentsPackageComponent;
  let fixture: ComponentFixture<PolicyDocumentsPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDocumentsPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDocumentsPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
