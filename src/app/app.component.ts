import { Component } from '@angular/core';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'portfolio-website-angular';
}
