import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../services/seo.service';

const formDestination = 'https://formsubmit.co/ajax/hello@rengerhomesolutions.com';

function sendForm(payload: Record<string, string>) {
  fetch(formDestination, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }).catch((error) => console.warn('FormSubmit request failed', error));
}

@Component({
  selector: 'app-work-with-us',
  imports: [FormsModule, RouterLink],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.scss'
})
export class WorkWithUsComponent implements OnInit {
  private seo = inject(SeoService);
  submitted = false;
  submitting = false;

  ngOnInit() {
    this.seo.set({
      title: 'Work With Us | Join the Renger Home Solutions Team',
      description: 'Join the Renger Home Solutions team in the Bay Area. We are looking for experienced handymen and tradespeople. Tell us your specialty, experience, and availability.',
      path: '/work-with-us',
    });
  }
  formStatus = '';
  formError = false;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    yearsExperience: '',
    experience: ''
  };

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
        'Form type': 'Work application',
        name,
        email: this.form.email,
        phone: this.form.phone || 'Not provided',
        specialty: this.form.specialty,
        yearsExperience: this.form.yearsExperience,
        experience: this.form.experience,
        _subject: `New work application from ${name || 'Renger website'}`,
        _template: 'table',
        _captcha: 'false'
      });

      this.submitted = true;
      this.formStatus = 'Thanks. Your application was sent to Renger Home Solutions.';
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialty: '',
        yearsExperience: '',
        experience: ''
      };
      this.submitting = false;
    } catch (error) {
      this.formError = true;
      this.formStatus = 'Sorry, the application could not be sent. Please call or email Renger Home Solutions directly.';
      this.submitting = false;
    }
  }
}
