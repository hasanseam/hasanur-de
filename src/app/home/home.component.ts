import { Component } from '@angular/core';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { ProfileCardMainComponent } from "./profile-card-main/profile-card-main.component";
import { LinkedinCardComponent } from "./side-cards/linkedin-card/linkedin-card.component";
import { LeetcodeCardComponent } from "./side-cards/leetcode-card/leetcode-card.component";
import { GithubCardComponent } from "./side-cards/github-card/github-card.component";

@Component({
  selector: 'app-home',
  imports: [HeaderHomeComponent, AboutCardComponent, ProfileCardMainComponent, 
           LinkedinCardComponent, LeetcodeCardComponent, GithubCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
