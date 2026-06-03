import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { contactFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

const formDestination = 'https://formsubmit.co/ajax/hello@rengerhomesolutions.com';

@Component({
  selector: 'app-contact',
  imports: [FaqComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
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
    message: '',
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
      const name = `${this.form.firstName} ${this.form.lastName}`.trim();
      const response = await fetch(formDestination, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email: this.form.email,
          phone: this.form.phone || 'Not provided',
          budget: this.form.budget || 'Not provided',
          message: this.form.message,
          _subject: `New estimate request from ${name || 'Renger website'}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('The form could not be sent.');
      }

      this.submitted = true;
      this.formStatus = `Thank you very much for contacting Renger Home Solutions.

            We truly appreciate your message and your interest in our services. Our team will review your request and get back to you as soon as possible.

            We look forward to speaking with you.`;
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
      };
    } catch (error) {
      this.formError = true;
      this.formStatus =
        'Sorry, the form could not be sent. Please call or email Renger Home Solutions directly.';
    } finally {
      this.submitting = false;
    }
  }
}
