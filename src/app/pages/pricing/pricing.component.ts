import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { pricingGroups } from '../../data/pricing-content';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  private seo = inject(SeoService);
  pricingGroups = pricingGroups;

  ngOnInit() {
    this.seo.set({
      title: 'Handyman Service Pricing | Renger Home Solutions',
      description: 'Clear starting prices for furniture assembly from $39.99, TV mounting from $149.99, kitchen and bath caulking, door repair, and more. Request a free Bay Area home project estimate.',
      path: '/pricing',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80',
    });
  }
}
