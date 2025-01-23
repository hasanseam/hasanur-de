import { Component } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-publication-card',
  imports: [SafePipe],
  templateUrl: './publication-card.component.html',
  styleUrl: './publication-card.component.css'
})
export class PublicationCardComponent {
  isDocumentVisible = false;
  documentUrl = window.location.origin + '/assets/application.pdf';

  showDocument() {
    return;
    this.isDocumentVisible = true;
  }
  closeModal(event: MouseEvent) {
    if ((event.target as HTMLElement).className === 'document-modal') {
      this.isDocumentVisible = false;
    }
  }
}
