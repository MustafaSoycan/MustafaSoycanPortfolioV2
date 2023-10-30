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

  toggleNavigation() {
    this.isHamburgerActive = !this.isHamburgerActive;

    if(this.isHamburgerActive){
      console.log('Hamburger is active');
      this.router.navigate(['navigation']);
    }else{
      console.log('Hamburger is not active');
      this.router.navigate(['']);
    }
  }

}