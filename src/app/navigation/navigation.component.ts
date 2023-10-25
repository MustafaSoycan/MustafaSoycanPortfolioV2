import { Component, Renderer2 } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private appComponent: AppComponent, private renderer: Renderer2) {}

  toggleHamburger() {
    this.appComponent.toggleHamburger(); // Rufen Sie die Funktion in Ihrer AppComponent auf.
  }


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    this.toggleHamburger();
  }
}
