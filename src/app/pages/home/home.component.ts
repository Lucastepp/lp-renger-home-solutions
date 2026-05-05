import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { homeFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-home',
  imports: [FaqComponent, RouterLink],
  template: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content page-grid">
        <div class="hero-copy">
          <div class="trust-row">
            <span>4.9 rated by local homeowners</span>
            <span>Licensed & insured crews</span>
          </div>
          <h1>Reliable Home Improvement Contractors in San Francisco, CA</h1>
          <p>
            Renger Home Solutions helps Bay Area homeowners handle repairs, remodels, roofing, painting, drywall, flooring,
            and punch-list projects with clean communication and dependable workmanship.
          </p>
          <div class="pill-row">
            <span>Interior Remodeling</span>
            <span>Exterior Repairs</span>
            <span>Same-week Estimates</span>
          </div>
        </div>

        <aside class="estimate-card" aria-label="Estimate call to action">
          <h2>Need Work Done? Let Us Help.</h2>
          <ul>
            <li>Fast, free project estimate</li>
            <li>Residential repairs and remodels</li>
          </ul>
          <div class="choice-grid">
            <a routerLink="/contact">
              <strong>Small Fix</strong>
              <span>Repairs & touch-ups</span>
            </a>
            <a routerLink="/contact">
              <strong>Major Project</strong>
              <span>Remodels & upgrades</span>
            </a>
          </div>
          <a class="primary-action" routerLink="/contact">Start My Estimate</a>
        </aside>
      </div>
    </section>

    <section class="section soft">
      <div class="section-heading">
        <span class="eyebrow">Our Services</span>
        <h2>Home Solutions Built Around Your Property</h2>
        <p>From quick repairs to larger remodeling projects, our team keeps the work organized, clean, and easy to schedule.</p>
      </div>

      <div class="card-grid">
        @for (service of services; track service.title) {
          <article class="service-card">
            <img [src]="service.image" [alt]="service.alt" />
            <div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.text }}</p>
              <a routerLink="/contact">Explore service</a>
            </div>
          </article>
        }
      </div>

      <div class="section-action">
        <a class="secondary-action" routerLink="/contact">Get a Fast Estimate</a>
      </div>
    </section>

    <section class="section split">
      <div>
        <span class="blue-note">Local experience, practical scheduling, responsive service.</span>
        <h2>Why Choose Renger Home Solutions in San Francisco?</h2>
        <div class="check-list">
          <p><strong>Full-service home repair support.</strong> We handle the details homeowners often struggle to coordinate across multiple trades.</p>
          <p><strong>Bay Area property knowledge.</strong> We understand older homes, tight lots, weather exposure, and busy neighborhood access.</p>
          <p><strong>Clean project management.</strong> You get clear estimates, scheduling updates, and respectful work areas from start to finish.</p>
        </div>
      </div>
      <img class="feature-image" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80" alt="Updated Bay Area style home interior" />
    </section>

    <section class="section">
      <div class="split reverse">
        <img class="feature-image" src="https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1100&q=80" alt="Residential home exterior repair project" />
        <div>
          <h2>One Crew for the Home Projects You Keep Putting Off</h2>
          <div class="check-list">
            <p><strong>Fewer handoffs.</strong> A single point of contact makes estimates, scheduling, and progress easier to follow.</p>
            <p><strong>Better finish quality.</strong> Small details like trim, caulking, patching, and paint matching are treated as part of the job.</p>
            <p><strong>CTA-friendly landing flow.</strong> Every section gives the homeowner a clear next step: call or request an estimate.</p>
          </div>
        </div>
      </div>
      <div class="section-action tight">
        <a class="secondary-action" routerLink="/contact">Get a Fast Estimate</a>
      </div>
    </section>

    <app-faq
      [items]="faqs"
      intro="General answers for homeowners comparing contractors in San Francisco and the Bay Area."
    />

    <section class="section cta-band">
      <div>
        <h2>Ready for a faster home repair estimate?</h2>
        <p>Call now or send a few project details. We will follow up during normal business hours.</p>
      </div>
      <a routerLink="/contact">Request Estimate</a>
    </section>
  `,
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
