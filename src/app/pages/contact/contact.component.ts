import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { contactFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-contact',
  imports: [FaqComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;
  submitting = false;
  formStatus = '';
  formError = false;
  faqs = contactFaqs;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      const city = params.get('city');

      if (city && !this.form.message) {
        this.form.message = `Hello, I am requesting service in ${city}, ...`;
      }
    });
  }

  async submit() {
    if (this.submitting) {
      return;
    }

    this.submitting = true;
    this.submitted = false;
    this.formError = false;
    this.formStatus = '';

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'estimate',
          ...this.form
        })
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || 'The form could not be sent.');
      }

      this.submitted = true;
      this.formStatus = 'Obrigado por nos enviar uma mensagem. Responderemos o mais rápido possível.';
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        budget: '',
        message: ''
      };
    } catch (error) {
      this.formError = true;
      this.formStatus = 'Sorry, the form could not be sent. Please call or email Renger Home Solutions directly.';
    } finally {
      this.submitting = false;
    }
  }
}
