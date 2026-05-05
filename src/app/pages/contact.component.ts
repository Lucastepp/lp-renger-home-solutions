import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
    <section class="page-hero contact-hero">
      <div>
        <span class="eyebrow">Contact</span>
        <h1>Request a Fast Home Improvement Estimate</h1>
        <p>Send the project details from this page. No email app needed.</p>
      </div>
    </section>

    <section class="section contact-layout">
      <aside class="contact-card">
        <h2>Contact Information</h2>
        <p>Thank you for considering Ranger Home Solutions. We will get back to you during normal business hours.</p>
        <a href="tel:+14155550198">(415) 555-0198</a>
        <a href="mailto:hello@rangerhomesolutions.com">hello@rangerhomesolutions.com</a>
        <span>San Francisco, CA 94110</span>
      </aside>

      <form class="contact-form" (ngSubmit)="submit()" #estimateForm="ngForm">
        <h2>Send us a message</h2>
        <label>
          First name
          <input name="firstName" [(ngModel)]="form.firstName" required />
        </label>
        <label>
          Last name
          <input name="lastName" [(ngModel)]="form.lastName" required />
        </label>
        <label>
          Email
          <input type="email" name="email" [(ngModel)]="form.email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" [(ngModel)]="form.phone" />
        </label>
        <label class="full">
          Message <span>Max. 500 characters</span>
          <textarea name="message" [(ngModel)]="form.message" maxlength="500" required></textarea>
        </label>
        <button type="submit" [disabled]="estimateForm.invalid">Submit</button>
        @if (submitted) {
          <p class="form-status">Thanks. This demo captured the request. Connect Formspree, Web3Forms, or an API endpoint to send real emails.</p>
        }
      </form>
    </section>
  `
})
export class ContactComponent {
  submitted = false;
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  submit() {
    this.submitted = true;
  }
}
