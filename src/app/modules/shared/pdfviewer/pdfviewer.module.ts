import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfviewerComponent } from './pdfviewer.component';

@NgModule({
  declarations: [PdfviewerComponent],
  imports: [CommonModule],
  bootstrap: [PdfviewerComponent],
  exports: [PdfviewerComponent],
})
export class PdfviewerModule {}
