import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';
import { HomeComponent } from './pages/home.component';
import { ServiceAreasComponent } from './pages/service-areas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ranger Home Solutions | San Francisco Home Improvement' },
  { path: 'about', component: AboutComponent, title: 'About Ranger Home Solutions' },
  { path: 'service-areas', component: ServiceAreasComponent, title: 'San Francisco & Bay Area Service Areas' },
  { path: 'contact', component: ContactComponent, title: 'Contact Ranger Home Solutions' },
  { path: '**', redirectTo: '' }
];
