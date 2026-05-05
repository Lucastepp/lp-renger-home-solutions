import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="top-cta">
      <span>Licensed Bay Area contractor</span>
      <a href="tel:+14155550198">Call now: (415) 555-0198</a>
    </div>

    <header class="site-header">
      <a class="brand" routerLink="/" aria-label="Renger Home Solutions home">
        <img class="brand-logo brand-logo-full" src="/assets/brand/renger-logo-horizontal.png" alt="Renger Home Solutions" />
        <img class="brand-logo brand-logo-icon" src="/assets/brand/renger-logo-icon.png" alt="Renger Home Solutions" />
      </a>

      <nav aria-label="Main navigation">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/service-areas" routerLinkActive="active">Service Areas</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>

      <a class="header-button" href="tel:+14155550198">Get a Fast Estimate</a>
    </header>
  `
})
export class HeaderComponent {}
