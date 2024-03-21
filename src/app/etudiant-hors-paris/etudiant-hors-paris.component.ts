import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant-service.service'; 

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css']
})
export class EtudiantHorsParisComponent implements OnInit {
  etudiantsHorsParis: any[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantsHorsParis = this.etudiantService.getEtudiantsHorsParis();
  }
}
