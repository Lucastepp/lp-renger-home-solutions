import { Component, Input } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  template: `
    <section class="section faq">
      <div class="section-heading">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h2>{{ title }}</h2>
        <p>{{ intro }}</p>
      </div>

      <div class="faq-list">
        @for (item of items; track item.question; let index = $index) {
          <article class="faq-item" [class.open]="isOpen(index)">
            <button type="button" (click)="toggle(index)" [attr.aria-expanded]="isOpen(index)" [attr.aria-controls]="'faq-panel-' + index">
              <span>{{ item.question }}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </button>

            <div class="faq-answer" [id]="'faq-panel-' + index">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        }
      </div>
    </section>
  `
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
