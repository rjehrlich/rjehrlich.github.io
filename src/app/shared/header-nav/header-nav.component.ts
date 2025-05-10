import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderComponent {
  menuVisible = false;
  locked = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const banner = document.getElementById('banner');
    const header = document.getElementById('header');
    if (!banner || !header) return;

    const headerHeight = header.offsetHeight;
    const bannerBottom = banner.getBoundingClientRect().bottom;

    if (bannerBottom < headerHeight) {
      header.classList.remove('alt');
    } else {
      header.classList.add('alt');
    }
  }

  toggleMenu(): void {
    if (this.locked) return;
    this.locked = true;

    this.menuVisible = !this.menuVisible;
    setTimeout(() => {
      this.locked = false;
    }, 350);
  }

  hideMenu(): void {
    if (this.locked) return;
    this.locked = true;

    this.menuVisible = false;
    setTimeout(() => {
      this.locked = false;
    }, 350);
  }
}

