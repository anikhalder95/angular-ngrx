import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [CoreComponent, PagenotfoundComponent, NavigationComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
