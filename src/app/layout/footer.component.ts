import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
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
  `
})
export class FooterComponent {}
