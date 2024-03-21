import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styleUrls: ['./form-specialite.component.css']
})
export class FormSpecialiteComponent implements OnInit {
  nomSpecialite: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Formulaire soumis avec le nom de la spécialité :", this.nomSpecialite);
  }
}
