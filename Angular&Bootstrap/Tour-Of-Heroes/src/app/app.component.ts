import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  resetSelectedHero() {
    // Nous allons passer cette méthode à notre composant Heroes
  }
  
}
