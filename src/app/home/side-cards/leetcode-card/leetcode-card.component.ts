import { Component } from '@angular/core';

@Component({
  selector: 'app-leetcode-card',
  imports: [],
  templateUrl: './leetcode-card.component.html',
  styleUrl: './leetcode-card.component.css'
})
export class LeetcodeCardComponent {
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
}
