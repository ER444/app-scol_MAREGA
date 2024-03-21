import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService{
  etudiants: any[] = [
    { nom: "RIVAY", prenom: "Claude", adresse: "24 rue de Montreuil", codePostal: "75020", ville: "Paris", email: "no_adr1@vol.org", genre: "Homme", age: 20, id: 10101 },
    { nom: "BOUNAR", prenom: "Mehdi", adresse: "10 Bd. Voltaire", codePostal: "75011", ville: "Paris", email: "no_adr2@vol.org", genre: "Homme", age: 25, id: 10201 },
    { nom: "RATTIER", prenom: "Liza", adresse: "44 rue de Montreuil", codePostal: "75020", ville: "Paris", email: "no_adr10@vol.org", genre: "Femme", age: 19, id: 11553 },
    { nom: "Edme", prenom: "Liza", adresse: "12 rue de Montreuil", codePostal: "75020", ville: "Paris", email: "no_adr3@vol.org", genre: "Femme", age: 21, id: 12124 },
    { nom: "LEE", prenom: "Yan Fu", adresse: "113 Av. Gl De Gaule", codePostal: "92000", ville: "Nanterre", email: "no_adr4@vol.org", genre: "Homme", age: 22, id: 21094 },
    { nom: "VERIN", prenom: "Eric", adresse: "10-Bis rue Saint Maur", codePostal: "77000", ville: "Melun", email: "no_adr5@vol.org", genre: "Homme", age: 33, id: 50001 },
    { nom: "LEROY", prenom: "Axelle", adresse: "11 Av. Gl De Gaule", codePostal: "77100", ville: "Meaux", email: "no_adr6@vol.org", genre: "Femme", age: 40, id: 55001 },
    { nom: "FISCHER", prenom: "Morgane", adresse: "5 rue de la Pierre Levée", codePostal: "94500", ville: "Champigny/Marne", email: "no_adr7@vol.org", genre: "Femme", age: 41, id: 65002 },
    { nom: "BENALI", prenom: "Mira", adresse: "21 rue de Valvin", codePostal: "94300", ville: "Vincennes", email: "no_adr8@vol.org", genre: "Femme", age: 19, id: 11576 },
    { nom: "CEZAIRE", prenom: "Joël", adresse: "56 rue de Liege", codePostal: "77550", ville: "Moissy", email: "no_adr9@vol.org", genre: "Homme", age: 33, id: 11131 }
  ];

  constructor() { }
  getEtudiants() {
    return this.etudiants;
  }
// Méthode pour récupérer les étudiants résidant à Paris
getEtudiantsParis(): any[] {
  return this.etudiants.filter(etudiant => etudiant.ville === 'Paris');
}

// Méthode pour récupérer les étudiants habitant hors de Paris
getEtudiantsHorsParis(): any[]  {
  return this.etudiants.filter(etudiant => etudiant.ville !== 'Paris');
}

}
