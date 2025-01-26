import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-card',
  imports: [],
  templateUrl: './linkedin-card.component.html',
  styleUrl: './linkedin-card.component.css'
})
export class LinkedinCardComponent {
  constructor(private router:Router){

  }
navigateToLinkedin() {
this.router.navigate(['/linkedin']);
console.log("hello");
}

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
