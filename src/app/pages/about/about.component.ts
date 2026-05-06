import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { aboutFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-about',
  imports: [FaqComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faqs = aboutFaqs;
}
