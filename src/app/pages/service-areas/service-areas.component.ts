import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { serviceAreaFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-service-areas',
  imports: [FaqComponent, RouterLink],
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
        <h2>Bay Area Communities We Serve</h2>
        <p>Six key service areas for homeowners looking for remodeling, repairs, roofing, painting, drywall, flooring, and general home improvement help.</p>
      </div>

      <div class="area-card-grid">
        @for (area of areas; track area.name) {
          <article class="area-card">
            <img [src]="area.image" [alt]="area.alt" />
            <div>
              <span>{{ area.label }}</span>
              <h3>{{ area.name }}</h3>
              <p>{{ area.text }}</p>
              <a routerLink="/contact">Request service in {{ area.name }}</a>
            </div>
          </article>
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

    <app-faq
      [items]="faqs"
      title="Service Area Questions"
      intro="Answers about where Renger Home Solutions works and how homeowners can request service."
    />
  `,
  styleUrl: './service-areas.component.scss'
})
export class ServiceAreasComponent {
  faqs = serviceAreaFaqs;

  areas = [
    {
      name: 'San Francisco',
      label: 'Core service area',
      text: 'Home repairs, remodels, exterior fixes, paint, drywall, flooring, and punch-list projects throughout San Francisco neighborhoods.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80',
      alt: 'San Francisco skyline and bay'
    },
    {
      name: 'Daly City',
      label: 'Peninsula north',
      text: 'Practical home improvement support for Daly City homeowners, from small repairs to larger residential upgrades.',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=900&q=80',
      alt: 'Coastal Bay Area neighborhood near Daly City'
    },
    {
      name: 'Oakland',
      label: 'East Bay',
      text: 'Reliable crews for Oakland homes, older properties, rental updates, finish repairs, and exterior maintenance projects.',
      image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=900&q=80',
      alt: 'Oakland and East Bay urban neighborhood'
    },
    {
      name: 'San Mateo',
      label: 'Mid-Peninsula',
      text: 'Residential remodeling, drywall, painting, flooring, and home repair help for San Mateo and nearby Peninsula homes.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
      alt: 'Well maintained suburban Bay Area home'
    },
    {
      name: 'South San Francisco',
      label: 'Peninsula access',
      text: 'Flexible scheduling for home repairs, exterior fixes, and improvement projects in South San Francisco.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
      alt: 'Modern Bay Area residential buildings'
    },
    {
      name: 'Berkeley',
      label: 'North East Bay',
      text: 'Home improvement work for Berkeley properties, including older homes that need careful repair and finish work.',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=900&q=80',
      alt: 'Bay Area craftsman style residential street'
    }
  ];
}
