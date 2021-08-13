import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAssemblyComponent } from './contract-assembly.component';

describe('ContractAssemblyComponent', () => {
  let component: ContractAssemblyComponent;
  let fixture: ComponentFixture<ContractAssemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractAssemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
