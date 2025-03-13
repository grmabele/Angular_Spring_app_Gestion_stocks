import { Component } from '@angular/core';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailCltFrsComponent} from "../../../composants/detail-clt-frs/detail-clt-frs.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
  imports: [
    BouttonActionComponent,
    DetailCltFrsComponent,
    PaginationComponent
  ],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent {

}
