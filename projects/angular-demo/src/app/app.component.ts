import { AfterViewInit, Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular';

  ngAfterViewInit(): void {
    this.loadStyle();
  }

  private loadStyle() {
    if (environment.production) {
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link') as any;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'styles.css';
      link.media = 'all';
      head.appendChild(link);
    }
  }
}
