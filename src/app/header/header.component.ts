import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Fügen Sie eine Variable hinzu, um den aktiven Status des Menüs zu verfolgen
  isMenuActive = false;

  constructor(private router: Router) {}

  // Methode zum Navigieren zur Navigation-Komponente
  navigateToNavigation() {
    this.router.navigate(['/navigation']); // Hier 'navigation' durch den richtigen Pfad ersetzen
  }

  ngOnInit() {
    const menu_btn = document.querySelector('.hamburger') as HTMLElement;
  

    // Funktion zum Öffnen des Burger-Menüs und Navigieren
    const openMenuAndNavigate = () => {
      this.isMenuActive = true;
   
      this.navigateToNavigation();
    };

    // Event Listener für den Klick auf den Hamburger-Button
    menu_btn.addEventListener('click', openMenuAndNavigate);
  }
}