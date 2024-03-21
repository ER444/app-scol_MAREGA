import { Component, OnInit } from '@angular/core';
import { SpecService } from '../../services/spec-service.service'; // Utilisez '../' pour remonter d'un niveau


@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
  specialites: any[] = [];

  constructor(private specService: SpecService) { }

  ngOnInit(): void {
    this.specialites = this.specService.getSpecialites();
  }
}
