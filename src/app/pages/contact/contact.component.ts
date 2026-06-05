import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { contactFaqs } from '../../data/faq-content';
import { SeoService } from '../../services/seo.service';
import { FaqComponent } from '../../shared/faq/faq.component';

const formDestination = 'https://formsubmit.co/ajax/hello@rengerhomesolutions.com';

function sendForm(payload: Record<string, string>) {
  fetch(formDestination, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).catch((error) => console.warn('FormSubmit request failed', error));
}

@Component({
  selector: 'app-contact',
  imports: [FaqComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private seo = inject(SeoService);
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

  ngOnInit() {
    this.seo.set({
      title: 'Get a Free Estimate | Contact Renger Home Solutions',
      description: 'Request a free home improvement estimate from Renger Home Solutions. Call (650) 418-9524 or send a message online. Serving San Francisco and the Bay Area.',
      path: '/contact',
    });
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      const city = params.get('city');

      if (city && !this.form.message) {
        this.form.message = `Hello, I am requesting service in ${city}, ...`;
      }
    });
  }

  submit() {
    if (this.submitting) {
      return;
    }

    this.submitting = true;
    this.submitted = false;
    this.formError = false;
    this.formStatus = '';

    try {
      const name = `${this.form.firstName} ${this.form.lastName}`.trim();
      sendForm({
        'Form type': 'Client estimate request',
        name,
        email: this.form.email,
        phone: this.form.phone || 'Not provided',
        budget: this.form.budget || 'Not provided',
        message: this.form.message,
        _subject: `New estimate request from ${name || 'Renger website'}`,
        _template: 'table',
        _captcha: 'false',
      });

      this.submitted = true;
      this.formStatus =
        'Thank you for sending us a message. We will get back to you as soon as possible.';
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
      };
      this.submitting = false;
    } catch (error) {
      this.formError = true;
      this.formStatus =
        'Sorry, the form could not be sent. Please call or email Renger Home Solutions directly.';
      this.submitting = false;
    }
  }
}
