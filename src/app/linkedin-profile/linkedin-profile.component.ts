import { Component, HostListener } from '@angular/core';
import { HeaderLinkedinComponent } from './header-linkedin/header-linkedin.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { EducationCardComponent } from "./education-card/education-card.component";
import { LicenseCardComponent } from "./license-card/license-card.component";
import { PublicationCardComponent } from "./publication-card/publication-card.component";

@Component({
  selector: 'app-linkedin-profile',
  imports: [HeaderLinkedinComponent,
    ProfileCardComponent,
    ExperienceCardComponent, EducationCardComponent, LicenseCardComponent, PublicationCardComponent],
  templateUrl: './linkedin-profile.component.html',
  styleUrl: './linkedin-profile.component.css'
})
export class LinkedinProfileComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('app-header-linkedin');
    if (window.scrollY > 0) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

}
