import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceAreasComponent } from './pages/service-areas/service-areas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Renger Home Solutions | San Francisco Home Improvement' },
  { path: 'about', component: AboutComponent, title: 'About Renger Home Solutions' },
  { path: 'service-areas', component: ServiceAreasComponent, title: 'San Francisco & Bay Area Service Areas' },
  { path: 'contact', component: ContactComponent, title: 'Contact Renger Home Solutions' },
  { path: '**', redirectTo: '' }
];
