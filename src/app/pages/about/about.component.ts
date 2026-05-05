import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { aboutFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-about',
  imports: [FaqComponent, RouterLink],
  template: `
    <section class="page-hero about-hero">
      <div>
        <span class="eyebrow">About Renger</span>
        <h1>Dependable Home Improvement Help for Bay Area Homeowners</h1>
        <p>
          Renger Home Solutions is built around a simple promise: show up prepared, communicate clearly, and leave the home better than we found it.
        </p>
        <a class="primary-action compact" routerLink="/contact">Talk to a Project Lead</a>
      </div>
    </section>

    <section class="section split">
      <div>
        <h2>Built for Real Residential Work</h2>
        <p>
          This site is designed for a contractor who needs phone calls, estimate requests, and local search visibility.
          The messaging focuses on trust, fast response, and practical home services across San Francisco neighborhoods.
        </p>
        <div class="stats-row">
          <span><strong>4.9</strong> local rating placeholder</span>
          <span><strong>24 hr</strong> response target</span>
          <span><strong>Bay Area</strong> service coverage</span>
        </div>
      </div>
      <img class="feature-image" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80" alt="Contractor reviewing home improvement plans" />
    </section>

    <app-faq
      [items]="faqs"
      title="Questions About Renger Home Solutions"
      intro="Helpful answers about the company, the team approach, and what new customers can expect."
    />
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faqs = aboutFaqs;
}
