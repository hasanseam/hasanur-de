import { Component } from '@angular/core';

@Component({
  selector: 'app-github-card',
  imports: [],
  templateUrl: './github-card.component.html',
  styleUrl: './github-card.component.css'
})
export class GithubCardComponent {
  isTooltipVisible = false;
  tooltipX = 0;
  tooltipY = 0;

  showTooltip(event: MouseEvent) {
    this.isTooltipVisible = true;
    this.tooltipX = event.clientX;
    this.tooltipY = event.clientY;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }

  navigateToGitHub(){
    window.open('https://github.com/hasanseam','_blank');
  }
}
