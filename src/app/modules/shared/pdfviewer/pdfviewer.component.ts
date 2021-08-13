import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.scss'],
})
export class PdfviewerComponent implements AfterViewInit {
  constructor() {}
  @ViewChild('viewer') viewerRef: ElementRef;

  ngAfterViewInit(): void {
    WebViewer(
      {
        path: './../../../../assets/pdftron_libs',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      },
      this.viewerRef.nativeElement
    ).then((instance) => {});
  }
}
