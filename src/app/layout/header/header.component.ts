import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = signal(false);
  selectedLink = signal('');
  private closeTimer?: ReturnType<typeof setTimeout>;

  constructor(public router: Router) {}

  isActive(route: string) {
    return route === '/' ? this.router.url === '/' : this.router.url.startsWith(route);
  }

  closeMenu() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }

    this.selectedLink.set('');
    this.menuOpen.set(false);
  }

  navigateFromMenu(event: MouseEvent, route: string, link: string) {
    event.preventDefault();
    this.selectedLink.set(link);

    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }

    if (!window.matchMedia('(max-width: 980px)').matches) {
      this.router.navigateByUrl(route);
      this.selectedLink.set('');
      return false;
    }

    this.closeTimer = setTimeout(() => {
      this.selectedLink.set('');
      this.menuOpen.set(false);
      this.router.navigateByUrl(route);
    }, 240);

    return false;
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
}
