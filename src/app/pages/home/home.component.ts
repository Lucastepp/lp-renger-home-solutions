import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { homeFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-home',
  imports: [FaqComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faqs = homeFaqs;

  services = [
    {
      title: 'Roof & Exterior Repairs',
      text: 'Leak checks, fascia repair, siding touch-ups, gutter fixes, and weatherproofing support for Bay Area homes.',
      image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=900&q=80',
      alt: 'Residential roof and exterior repair work'
    },
    {
      title: 'Kitchen & Bath Updates',
      text: 'Practical remodel help for cabinets, tile, fixtures, flooring, paint, and finish work that improves daily life.',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=80',
      alt: 'Modern kitchen remodel with bright finishes'
    },
    {
      title: 'Drywall, Paint & Flooring',
      text: 'Patch, texture, paint, baseboards, trim, laminate, vinyl, and finish repairs after leaks or everyday wear.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
      alt: 'Home painting and drywall renovation tools'
    }
  ];
}
