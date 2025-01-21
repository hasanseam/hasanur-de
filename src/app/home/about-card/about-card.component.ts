import { Component } from '@angular/core';

@Component({
  selector: 'app-about-card',
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent {
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    const card = document.querySelector('.about-card');
    card?.classList.toggle('expanded');
}
}
