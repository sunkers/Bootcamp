import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './../mock-heroes';
import { ResetService } from '../reset.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero | null | undefined;

  constructor(private resetService: ResetService) {
    this.resetService.selectedHero.subscribe(newSelectedHero => {
      this.selectedHero = newSelectedHero === null ? null : this.heroes.find(hero => hero.id === newSelectedHero);
    });
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.resetService.selectedHero.next(hero.id);
  }
}