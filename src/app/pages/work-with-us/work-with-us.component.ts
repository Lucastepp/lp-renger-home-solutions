import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-with-us',
  imports: [FormsModule, RouterLink],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.scss'
})
export class WorkWithUsComponent {
  submitted = false;
  submitting = false;
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
          type: 'application',
          ...this.form
        })
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || 'The form could not be sent.');
      }

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
    } catch (error) {
      this.formError = true;
      this.formStatus = 'Sorry, the application could not be sent. Please call or email Renger Home Solutions directly.';
    } finally {
      this.submitting = false;
    }
  }
}
