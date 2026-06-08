import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { serviceAreaFaqs } from '../../data/faq-content';
import { SeoService } from '../../services/seo.service';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-service-areas',
  imports: [FaqComponent, FormsModule, RouterLink],
  templateUrl: './service-areas.component.html',
  styleUrl: './service-areas.component.scss'
})
export class ServiceAreasComponent implements OnInit {
  private seo = inject(SeoService);
  faqs = serviceAreaFaqs;
  searchTerm = '';

  ngOnInit() {
    this.seo.set({
      title: 'Handyman Service Areas | San Francisco, Peninsula & Bay Area',
      description: 'Renger Home Solutions serves San Francisco, Daly City, Pacifica, San Mateo, Burlingame, Palo Alto, Mountain View, Sunnyvale, and 15+ Bay Area communities. Request service in your city.',
      path: '/service-areas',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    });
  }

  areas = [
    {
      name: 'San Francisco',
      label: 'Core service area',
      text: 'Home repairs, exterior fixes, paint, drywall, flooring, and punch-list projects throughout San Francisco neighborhoods.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/San_Francisco_golden_gate_bridge.JPG?width=900',
      alt: 'Golden Gate Bridge in San Francisco'
    },
    {
      name: 'Daly City',
      label: 'Peninsula north',
      text: 'Practical home improvement support for Daly City homeowners, from small repairs to larger residential upgrades.',
      image: '/assets/service-areas/daly-city.jpeg',
      alt: 'Fog over a residential neighborhood in Daly City'
    },
    {
      name: 'Pacifica',
      label: 'Coastside',
      text: 'Exterior repairs, maintenance, paint, and small home projects for homes near the coast.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pacifica_ca_pier.jpg?width=900',
      alt: 'Pacifica Pier on the coast'
    },
    {
      name: 'South San Francisco',
      label: 'Peninsula access',
      text: 'Flexible scheduling for home repairs, exterior fixes, and improvement projects in South San Francisco.',
      image: '/assets/service-areas/south-san-francisco.jpg',
      alt: 'South San Francisco hillside sign'
    },
    {
      name: 'San Bruno',
      label: 'Peninsula north',
      text: 'Small-to-medium repairs, drywall, paint, assembly, and property maintenance for San Bruno homes.',
      image: '/assets/service-areas/san-bruno.jpg',
      alt: 'San Bruno City Park'
    },
    {
      name: 'Burlingame',
      label: 'Peninsula',
      text: 'Kitchen and bath updates, finish repairs, flooring details, and maintenance support in Burlingame.',
      image: '/assets/service-areas/burlingame.jpeg',
      alt: 'Burlingame Caltrain station'
    },
    {
      name: 'San Mateo',
      label: 'Mid-Peninsula',
      text: 'Drywall, painting, flooring, exterior repairs, and home repair help for San Mateo and nearby Peninsula homes.',
      image: '/assets/service-areas/san-mateo.jpeg',
      alt: 'Downtown San Mateo'
    },
    {
      name: 'San Carlos',
      label: 'Mid-Peninsula',
      text: 'Property maintenance, fixture updates, paint, drywall patches, and exterior repair support in San Carlos.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Downtownsancarlos.jpg?width=900',
      alt: 'Downtown San Carlos'
    },
    {
      name: 'Redwood City',
      label: 'Mid-Peninsula',
      text: 'Home repair help for Redwood City properties, including finish work, caulking, assembly, paint, and maintenance.',
      image: '/assets/service-areas/redwood-city.jpg',
      alt: 'Downtown residences in Redwood City'
    },
    {
      name: 'Woodside',
      label: 'Peninsula foothills',
      text: 'Maintenance, careful repairs, flooring details, and exterior fixes for Woodside properties.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Woodside_Store%2C_471_Kings_Mountain_Rd.%2C_Woodside%2C_CA_9-18-2011_5-31-47_PM.JPG?width=900',
      alt: 'Historic Woodside Store in Woodside'
    },
    {
      name: 'Palo Alto',
      label: 'South Peninsula',
      text: 'Handyman support, drywall and paint repairs, fixture updates, and property maintenance in Palo Alto.',
      image: '/assets/service-areas/palo-alto.jpg',
      alt: 'Palo Alto street scene'
    },
    {
      name: 'Mountain View',
      label: 'South Peninsula',
      text: 'Small home projects, assembly, caulking, paint touch-ups, and maintenance support in Mountain View.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Castro_Street_Mountain_View_sidewalk.jpg?width=900',
      alt: 'Castro Street in Mountain View'
    },
    {
      name: 'Sunnyvale',
      label: 'South Bay access',
      text: 'Practical home fixes, drywall repairs, flooring details, and exterior repair help for Sunnyvale homes.',
      image: '/assets/service-areas/sunnyvale.jpg',
      alt: 'Murphy Street in downtown Sunnyvale'
    },
    {
      name: 'Foster City',
      label: 'Peninsula waterfront',
      text: 'Property maintenance, caulking, door repairs, fixture updates, and punch-list support in Foster City.',
      image: '/assets/service-areas/foster-city.jpg',
      alt: 'Foster City Lagoon'
    },
    {
      name: 'Millbrae',
      label: 'Peninsula north',
      text: 'Exterior repairs, drywall and paint, flooring details, and everyday home fixes for Millbrae residents.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Millbrae_station_from_Caltrain_platform%2C_May_2009.jpg?width=900',
      alt: 'Millbrae station viewed from the Caltrain platform'
    }
  ];

  get filteredAreas() {
    const query = this.searchTerm.trim().toLowerCase();

    if (!query) {
      return this.areas;
    }

    return this.areas.filter((area) => area.name.toLowerCase().includes(query) || area.label.toLowerCase().includes(query));
  }

}
