import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

/**
 * Komponente für das 'project-da-bubble'-Element.
 */
@Component({
  selector: 'app-project-da-bubble',
  templateUrl: './project-da-bubble.component.html',
  styleUrls: ['./project-da-bubble.component.scss']
})
export class ProjectDaBubbleComponent {
   /**
   * Aktueller Zustand der Komponente.
   */
  state = 'normal';

  /**
   * Gibt an, ob die Komponente sichtbar ist.
   */
  isVisible = false;

  /**
   * Elementreferenz zur 'aboutmeLeft'-Ansicht.
   */
  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;

   /**
   * Erstellt eine Instanz der ProjectDaBubbleComponent.
   * @param renderer - Der Renderer2 zum Manipulieren von DOM-Elementen.
   */
  constructor(private renderer: Renderer2) {}
  
 /**
   * Ein Array zum Verfolgen des Hovered-Zustands für jedes Projekt.
   */
  hoveredStates: boolean[] = [];

   /**
   * Zeigt die Beschreibung für ein Projekt an.
   * @param index - Der Index des Projekts, für das die Beschreibung angezeigt werden soll.
   */
  showDescription(index: number) {
    // Set the hovered state for the project at the given index to true
    this.hoveredStates[index] = true;
  }

   /**
   * Versteckt die Beschreibung für ein Projekt.
   * @param index - Der Index des Projekts, für das die Beschreibung versteckt werden soll.
   */
  hideDescription(index: number) {
    // Set the hovered state for the project at the given index to false
    this.hoveredStates[index] = false;
  }

   /**
   * Überprüft, ob die Beschreibung für ein Projekt sichtbar sein sollte.
   * @param index - Der Index des Projekts, für das die Sichtbarkeit überprüft wird.
   * @returns True, wenn die Beschreibung sichtbar sein sollte, andernfalls false.
   */
  isDescriptionVisible(index: number): boolean {
    // Check if the description should be visible for the project at the given index
    return this.hoveredStates[index] || false;
  }

   /**
   * Navigiert zu einer URL in einem neuen Tab.
   * @param url - Die URL, zu der navigiert werden soll.
   */
  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

   /**
   * Wird nach der Initialisierung aufgerufen und überwacht die Sichtbarkeit der Komponente.
   */
  ngAfterViewInit() {
    this.observeVisibility();
  }
 /**
   * Überwacht die Sichtbarkeit der Komponente mit einem Intersection Observer.
   */
  observeVisibility() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Set the flag to true
          if (this.state !== 'unnormal') {
            this.state = 'unnormal'; // Change the state to 'unnormal' only if it's not already set
          }
        } else {
          if (!this.isVisible) {
            this.state = 'normal'; // If not visible, reset the state only if the flag is false
          }
        }
      });
    }, options);

    if (this.aboutmeLeft) {
      observer.observe(this.aboutmeLeft.nativeElement);
    }
  }

}
