import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDocumentViewerComponent } from './policy-document-viewer.component';

describe('PolicyDocumentViewerComponent', () => {
  let component: PolicyDocumentViewerComponent;
  let fixture: ComponentFixture<PolicyDocumentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDocumentViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDocumentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
