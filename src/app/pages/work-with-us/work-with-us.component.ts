import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

const formDestination = 'https://formsubmit.co/ajax/hello@rengerhomesolutions.com';

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
      const name = `${this.form.firstName} ${this.form.lastName}`.trim();
      const response = await fetch(formDestination, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email: this.form.email,
          phone: this.form.phone || 'Not provided',
          specialty: this.form.specialty,
          yearsExperience: this.form.yearsExperience,
          experience: this.form.experience,
          _subject: `New work application from ${name || 'Renger website'}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        throw new Error('The form could not be sent.');
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
