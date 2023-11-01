import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor( private router: Router, private sharedService: SharedService) {}

  navigateToSection(sectionID: string) {
    this.router.navigate(['/'], { fragment: sectionID });
    this.sharedService.toggleHamburgerState();
  }
}
