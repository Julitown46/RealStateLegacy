import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Houses } from './components/houses/houses';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Home, Houses, About, Contact, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Frontend RealStateLegacy');

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.translate.use('es');
  }
}
