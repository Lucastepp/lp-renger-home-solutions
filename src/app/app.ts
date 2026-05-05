import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
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

    <main>
      <router-outlet />
    </main>

    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" routerLink="/">
          <img class="brand-logo footer-logo" src="/assets/brand/renger-logo-horizontal.png" alt="Renger Home Solutions" />
        </a>
        <p>Residential remodeling, repairs, roofing, painting, drywall, flooring, and handyman work across San Francisco and the Bay Area.</p>
      </div>

      <div>
        <h3>Services</h3>
        <a routerLink="/">Kitchen & Bath Updates</a>
        <a routerLink="/">Roof & Exterior Repairs</a>
        <a routerLink="/">Drywall, Paint & Flooring</a>
        <a routerLink="/">General Home Repairs</a>
      </div>

      <div>
        <h3>Locations</h3>
        <a routerLink="/service-areas">San Francisco</a>
        <a routerLink="/service-areas">Daly City</a>
        <a routerLink="/service-areas">Oakland</a>
        <a routerLink="/service-areas">San Mateo</a>
      </div>

      <div>
        <h3>Contact</h3>
        <a href="tel:+14155550198">(415) 555-0198</a>
        <a href="mailto:hello@rengerhomesolutions.com">hello@rengerhomesolutions.com</a>
        <p>Serving San Francisco, CA 94110</p>
      </div>
    </footer>
  `,
  styleUrl: './app.scss'
})
export class App {}
