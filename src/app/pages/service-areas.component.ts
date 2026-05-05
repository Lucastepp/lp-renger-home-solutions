import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-areas',
  imports: [RouterLink],
  template: `
    <section class="page-hero locations-hero">
      <div>
        <span class="eyebrow">Find Us</span>
        <h1>Home Improvement Services Across San Francisco & the Bay Area</h1>
        <p>
          Location-focused content helps homeowners find Renger Home Solutions when searching for nearby remodeling, repair, and handyman services.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <span class="eyebrow">Service Area</span>
        <h2>San Francisco Neighborhoods We Serve</h2>
        <p>These placeholders can later become individual SEO pages for each neighborhood or city.</p>
      </div>

      <div class="location-grid">
        @for (area of areas; track area) {
          <a routerLink="/contact">{{ area }}</a>
        }
      </div>

      <div class="map-panel">
        <div>
          <h3>Renger Home Solutions</h3>
          <p>San Francisco, CA 94110</p>
          <a href="https://www.google.com/maps/search/?api=1&query=San%20Francisco%20CA" target="_blank" rel="noreferrer">Open in Maps</a>
        </div>
      </div>
    </section>
  `
})
export class ServiceAreasComponent {
  areas = [
    'Mission District',
    'Noe Valley',
    'Bernal Heights',
    'SOMA',
    'Pacific Heights',
    'Sunset District',
    'Richmond District',
    'Daly City',
    'South San Francisco',
    'San Mateo',
    'Oakland',
    'Berkeley'
  ];
}
