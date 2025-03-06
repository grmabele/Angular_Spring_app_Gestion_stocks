import { Component } from '@angular/core';
import {MonPremierServiceService} from "../../mes-services/mon-premier-service.service";

interface OneInit {
  ngOnInit(): void
}

@Component({
  selector: 'app-mon-premier-composant',
  standalone: true,
  imports: [],
  templateUrl: './mon-premier-composant.component.html',
  styleUrl: './mon-premier-composant.component.scss'
})
export class MonPremierComposantComponent implements OneInit {
  monInt = 0;

  constructor(
    private monService: MonPremierServiceService
  ) {
  }
  ngOnInit() {
    this.monInt = this.monService.sommeDeuxPlusTrois();

  }

}
