import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant-service.service';


@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.css'] // Utilisez `styleUrls` au lieu de `styleUrl`
})
export class EtudiantParisComponent implements OnInit {
  etudiantsParis: any[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantsParis = this.etudiantService.getEtudiantsParis();
  }
}
