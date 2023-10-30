import { Component, Renderer2 } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private appComponent: AppComponent, private renderer: Renderer2, private router: Router) {}
  
  navigateToSection(){
    this.router.navigate(['']);
  }
}
