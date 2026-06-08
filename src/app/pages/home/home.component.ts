import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { homeFaqs } from '../../data/faq-content';
import { pricingGroups } from '../../data/pricing-content';
import { SeoService } from '../../services/seo.service';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-home',
  imports: [FaqComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private seo = inject(SeoService);
  @ViewChildren('serviceCard', { read: ElementRef })
  serviceCards!: QueryList<ElementRef<HTMLElement>>;

  locations = [
    'San Francisco, CA',
    'Millbrae',
    'Pacifica',
    'San Mateo',
    'Daly City'
  ];
  activeLocation = signal(this.locations[0]);
  locationVisible = signal(true);
  private locationIndex = 0;
  private locationRotationTimer?: ReturnType<typeof setTimeout>;
  private locationSwapTimer?: ReturnType<typeof setTimeout>;
  private pricingInterval?: ReturnType<typeof setInterval>;
  private pricingSwapTimer?: ReturnType<typeof setTimeout>;
  private estimateHeadingInterval?: ReturnType<typeof setInterval>;
  private estimateHeadingSwapTimer?: ReturnType<typeof setTimeout>;
  private serviceCardObserver?: IntersectionObserver;

  faqs = homeFaqs;

  services = [
    {
      title: 'Exterior Repairs',
      text: 'Fascia repair, siding touch-ups, gutter fixes, door repairs, and weatherproofing support for Bay Area homes.',
      image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=900&q=80',
      alt: 'Residential exterior repair work'
    },
    {
      title: 'Kitchen & Bath Updates',
      text: 'Practical update help for cabinets, tile, fixtures, caulking, flooring, paint, and finish work that improves daily life.',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=80',
      alt: 'Modern kitchen remodel with bright finishes'
    },
    {
      title: 'Drywall & Paint',
      text: 'Drywall installation, ceiling repairs, water damage reconstruction, taping, mudding, texture matching, and paint touch-ups.',
      image: '/assets/services/drywall-paint.jpg',
      alt: 'Worker installing drywall inside a home',
      zoomOutImage: true
    },
    {
      title: 'Flooring',
      text: 'Flooring repairs, finish details, baseboards, transitions, and small-to-medium updates that make rooms feel complete.',
      image: '/assets/services/flooring.jpg',
      alt: 'Hands measuring flooring during installation',
      zoomOutImage: true
    }
  ];

  pricingPreviewSlides = [
    pricingGroups.map((group) => ({
      title: group.title,
      price: group.featuredPrice,
      note: group.note
    })),
    [
      { title: 'Adjustable Standing Desk', price: '$79.99', note: 'Furniture assembly' },
      { title: 'Bed Frame', price: 'From $84.99', note: 'Furniture assembly' },
      { title: 'Shelving System Installation', price: 'From $169', note: 'Furniture assembly' },
      { title: 'Shower Caulking', price: 'From $219.99', note: 'Kitchen & bathroom' }
    ],
    [
      { title: 'Bookcase', price: '$79', note: 'Furniture assembly' },
      { title: 'Dresser, 8 Drawers', price: '$129', note: 'Furniture assembly' },
      { title: 'Bathtub Caulking', price: 'From $199', note: 'Kitchen & bathroom' },
      { title: 'Wire Concealment', price: 'From $49.99', note: 'TV mounting add-on' }
    ]
  ];
  pricingPreview = signal(this.pricingPreviewSlides[0]);
  pricingVisible = signal(true);
  private pricingSlideIndex = 0;
  estimateHeadings = [
    'Ready for a faster home repair estimate?',
    'Request your estimate today.'
  ];
  estimateHeading = signal(this.estimateHeadings[0]);
  estimateHeadingVisible = signal(true);
  private estimateHeadingIndex = 0;

  constructor() {
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.scheduleLocationRotation();

      this.pricingInterval = setInterval(() => {
        this.pricingVisible.set(false);
        this.pricingSwapTimer = setTimeout(() => {
          this.pricingSlideIndex = (this.pricingSlideIndex + 1) % this.pricingPreviewSlides.length;
          this.pricingPreview.set(this.pricingPreviewSlides[this.pricingSlideIndex]);
          this.pricingVisible.set(true);
        }, 520);
      }, 6200);

      this.estimateHeadingInterval = setInterval(() => {
        this.estimateHeadingVisible.set(false);
        this.estimateHeadingSwapTimer = setTimeout(() => {
          this.estimateHeadingIndex = (this.estimateHeadingIndex + 1) % this.estimateHeadings.length;
          this.estimateHeading.set(this.estimateHeadings[this.estimateHeadingIndex]);
          this.estimateHeadingVisible.set(true);
        }, 420);
      }, 7200);
    }
  }

  ngOnInit() {
    this.seo.set({
      title: 'Renger Home Solutions | Bay Area Handyman Services',
      description: 'Fully insured handyman services in San Francisco and the Bay Area. Fast free estimates for home repairs, drywall, painting, flooring, and property maintenance. Call (650) 418-9524.',
      path: '',
    });
  }

  ngAfterViewInit() {
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.revealAllServiceCards();
      return;
    }

    this.serviceCardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    this.serviceCards.forEach((card) => this.serviceCardObserver?.observe(card.nativeElement));
  }

  ngOnDestroy() {
    if (this.locationRotationTimer) {
      clearTimeout(this.locationRotationTimer);
    }

    if (this.locationSwapTimer) {
      clearTimeout(this.locationSwapTimer);
    }

    if (this.pricingInterval) {
      clearInterval(this.pricingInterval);
    }

    if (this.pricingSwapTimer) {
      clearTimeout(this.pricingSwapTimer);
    }

    if (this.estimateHeadingInterval) {
      clearInterval(this.estimateHeadingInterval);
    }

    if (this.estimateHeadingSwapTimer) {
      clearTimeout(this.estimateHeadingSwapTimer);
    }

    this.serviceCardObserver?.disconnect();
  }

  private revealAllServiceCards() {
    this.serviceCards.forEach((card) => card.nativeElement.classList.add('revealed'));
  }

  private scheduleLocationRotation() {
    const displayTime = this.locationIndex === 0 ? 5200 : 3000;

    this.locationRotationTimer = setTimeout(() => {
      this.locationVisible.set(false);
      this.locationSwapTimer = setTimeout(() => {
        this.locationIndex = (this.locationIndex + 1) % this.locations.length;
        this.activeLocation.set(this.locations[this.locationIndex]);
        this.locationVisible.set(true);
        this.scheduleLocationRotation();
      }, 180);
    }, displayTime);
  }
}
