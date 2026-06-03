import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { contactFaqs } from '../../data/faq-content';
import { FaqComponent } from '../../shared/faq/faq.component';

const formDestination = 'https://formsubmit.co/ajax/hello@rengerhomesolutions.com';
const formTimeoutMs = 8000;
const minimumLoadingMs = 900;

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));
}

async function sendForm(payload: Record<string, string>) {
  const controller = new AbortController();
  let timeoutId = 0;
  const formData = new URLSearchParams(payload);

  try {
    const request = fetch(formDestination, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
        signal: controller.signal,
      })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('The form could not be sent.');
        }

        const data = await response.json().catch(() => null);
        if (data?.success === false || data?.success === 'false') {
          throw new Error(data?.message || 'The form could not be sent.');
        }
      });

    const timeout = new Promise<void>((_, reject) => {
      timeoutId = window.setTimeout(() => {
        controller.abort();
        reject(new Error('The form confirmation timed out.'));
      }, formTimeoutMs);
    });

    await Promise.race([request, timeout]);
  } finally {
    window.clearTimeout(timeoutId);
  }
}

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
      await Promise.all([
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
        }),
        wait(minimumLoadingMs),
      ]);

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
