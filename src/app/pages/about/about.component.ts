import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { aboutFaqs } from '../../data/faq-content';
import { SeoService } from '../../services/seo.service';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-about',
  imports: [FaqComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);
  faqs = aboutFaqs;

  ngOnInit() {
    this.seo.set({
      title: 'About Renger Home Solutions | Insured Bay Area Handyman',
      description: 'Renger Home Solutions is a fully insured handyman service helping San Francisco and Bay Area homeowners with practical repairs, maintenance, and property updates. Get a free estimate.',
      path: '/about',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    });
  }
}
