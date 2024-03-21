import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecService {

  specialites: any[] = [
    { nom: "DEV APP", id: 1 },
    { nom: "ING RESEAUX", id: 2 },
    { nom: "INTEGRATEUR", id: 3 },
    { nom: "CHEF DE PROJET", id: 4 },
    { nom: "INFOGRAPHISTE", id: 5 },
    { nom: "UX DESIGNER", id: 6 },
    { nom: "DEVELOPPEUR MOBILE", id: 7 }
  ];

  constructor() { }

  getSpecialites() {
    return this.specialites;
  }
}
