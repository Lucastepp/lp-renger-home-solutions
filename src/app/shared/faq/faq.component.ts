import { Component, Input } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  @Input({ required: true }) items: FaqItem[] = [];
  @Input() eyebrow = 'FAQ';
  @Input() title = 'Frequently Asked Questions';
  @Input() intro = 'Quick answers to common questions.';

  openItems = new Set<number>();

  isOpen(index: number) {
    return this.openItems.has(index);
  }

  toggle(index: number) {
    if (this.openItems.has(index)) {
      this.openItems.delete(index);
      return;
    }

    this.openItems.add(index);
  }
}
