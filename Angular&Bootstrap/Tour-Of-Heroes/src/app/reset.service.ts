import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  selectedHero = new BehaviorSubject<number | null>(null);

  constructor() { }

  resetSelectedHero(): void {
    this.selectedHero.next(null);
  }
}
