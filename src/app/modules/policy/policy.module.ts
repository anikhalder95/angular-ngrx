import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicySearchComponent } from './components/policy-search/policy-search.component';
import { PolicyFiltersComponent } from './components/policy-filters/policy-filters.component';
import { PolicyFilterComponent } from './components/policy-filters/policy-filter/policy-filter.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContractAssemblyComponent } from './pages/contract-assembly/contract-assembly.component';
// import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyDocumentViewerComponent } from './components/policy-document-viewer/policy-document-viewer.component';
import { PolicyDocumentsComponent } from './components/policy-documents/policy-documents.component';
import { PolicyDocumentsPackageComponent } from './components/policy-documents-package/policy-documents-package.component';
import { PolicyDocumentComponent } from './components/policy-document/policy-document.component';
import { ButtonModule } from '../shared/button';
import { PdfviewerModule } from '../shared/pdfviewer';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { policyFeatureKey, ToDoReducer } from '../policy/store/reducers/policy.reducer';
import { PolicyEffects } from './store/effects/policy.effects';
import { StoreModule } from '@ngrx/store';
import { PolicyRoutingModule } from './policy-routing.module';

@NgModule({
  declarations: [
    PolicySearchComponent,
    PolicyFiltersComponent,
    PolicyFilterComponent,
    PolicyListComponent,
    PolicyDetailsComponent,
    PolicyDocumentViewerComponent,
    PolicyDocumentsComponent,
    PolicyDocumentsPackageComponent,
    PolicyDocumentComponent,
    DashboardComponent,
    ContractAssemblyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PolicyRoutingModule,
    ButtonModule,
    PdfviewerModule,
    StoreModule.forFeature(policyFeatureKey, ToDoReducer),
    EffectsModule.forFeature([PolicyEffects]), 
  ],
})
export class PolicyModule {}
