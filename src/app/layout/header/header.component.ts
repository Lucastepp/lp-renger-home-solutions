import { Component, signal } from '@angular/core';
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
      <a class="brand" routerLink="/" aria-label="Renger Home Solutions home" (click)="closeMenu()">
        <img class="brand-logo brand-logo-full" src="/assets/brand/renger-logo-horizontal.png" alt="Renger Home Solutions" />
        <img class="brand-logo brand-logo-icon" src="/assets/brand/renger-logo-icon.png" alt="Renger Home Solutions" />
      </a>

      <button class="menu-toggle" type="button" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-controls="main-menu" aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="main-menu" [class.open]="menuOpen()" aria-label="Main navigation">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Home</a>
        <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
        <a routerLink="/service-areas" routerLinkActive="active" (click)="closeMenu()">Service Areas</a>
        <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        <a class="mobile-call" href="tel:+14155550198" (click)="closeMenu()">Call Now</a>
      </nav>

      <a class="header-button" href="tel:+14155550198">Get a Fast Estimate</a>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = signal(false);

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
}
