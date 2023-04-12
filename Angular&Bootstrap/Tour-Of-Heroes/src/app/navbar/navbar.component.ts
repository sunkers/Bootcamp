import { Component } from '@angular/core';
import { ResetService } from '../reset.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private resetService: ResetService) { }

  resetSelectedHero(): void {
    this.resetService.resetSelectedHero();
  }
}
