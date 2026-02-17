import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-houses',
  imports: [TranslateModule],
  templateUrl: './houses.html',
  styleUrl: './houses.css',
})
export class Houses {
  isLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

