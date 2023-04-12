# Angular
## Components

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Chemin vers le fichier html
  styleUrls: ['./app.component.css'] // chemin vers le fichier css
})
export class AppComponent {
  title = 'app';
}

Pour utiliser le componnent, il faut écrire:
        <app-root></app-root>

## Templates

<p>{{ message }}</p>

eport class AppComponent {
  message = 'Hello World';
}

> Utile pour avoir un message dynamique

<button
    type="button"
    [ disabled ] ="canClick"
    (click)="sayMessage()">
    Trigger alert message
</button>

## ngIf

<div *ngIf="canEdit; else noEdit">
    <p>You can edit the following paragraph.</p>
</div>
 
<ng-template #noEdit>
    <p>The following paragraph is read only. Try clicking the button!</p>
</ng-template>

## ngFor

<ul>
    <li *ngFor="let item of items">
        {{ item }}
    </li>

## Services

> Couche de transition entre les composants et les données

## CLI

ng build > Compiler le projet
ng serve > Lancer le projet
ng generate component > Créer un composant
ng generate service > Créer un service
ng test > Lancer les tests
ng e2e > Lancer les tests e2e

## Librairies

Angular Router > Gestion des routes
Angular Material > UI
Angular Flex Layout > Layout
Angular Service Worker > Service Worker
Angular Universal > Server Side Rendering
Angular Forms > Forms
Angular HTTPClient > HTTPClient
Angular Animations > Animations

## Input & Output

> Input: Permet de passer des données du composant parent au composant enfant
> Output: Permet de passer des données du composant enfant au composant parent

## Lifecycle Hooks

> ngOnInit > Appelé après le constructeur
> ngOnChanges > Appelé quand les propriétés du composant sont modifiées
> ngDoCheck > Appelé à chaque changement de détection de changement
> ngAfterContentInit > Appelé après l'initialisation du contenu 
> ngAfterContentChecked > Appelé après chaque vérification du contenu
> ngAfterViewInit > Appelé après l'initialisation de la vue
> ngAfterViewChecked > Appelé après chaque vérification de la vue
> ngOnDestroy > Appelé avant la destruction du composant

