import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  bootstrap: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
