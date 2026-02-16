import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Toast } from './components/toast/toast';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, Navbar, Footer, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Frontend RealStateLegacy');

  constructor(private translate: TranslateService) {
    // Idioma por defecto
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    // Usar español por defecto o detectar del navegador
    this.translate.use('es');
  }
}
