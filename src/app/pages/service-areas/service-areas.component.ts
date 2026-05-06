import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { serviceAreaFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-service-areas',
  imports: [FaqComponent, RouterLink],
  templateUrl: './service-areas.component.html',
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
