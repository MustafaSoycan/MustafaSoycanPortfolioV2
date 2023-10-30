import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioV2';

  ngOnInit(): void{
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }

  isHamburgerActive: boolean = false;

  toggleHamburger() {
    this.isHamburgerActive = !this.isHamburgerActive;
  }
}
