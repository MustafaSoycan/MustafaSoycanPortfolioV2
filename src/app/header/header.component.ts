import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHamburgerActive: boolean = false;

  constructor(private router: Router) { }

  toggleHamburger() {
    this.isHamburgerActive = !this.isHamburgerActive;
    this.router.navigate(['navigation']);
  }

}