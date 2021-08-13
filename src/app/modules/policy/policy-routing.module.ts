import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractAssemblyComponent } from './pages/contract-assembly/contract-assembly.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'contract-assembly', component: ContractAssemblyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyRoutingModule {}
