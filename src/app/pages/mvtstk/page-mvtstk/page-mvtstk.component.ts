import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {
  DetailMvtStkArticleComponent
} from "../../../composants/detail-mvt-stk-article/detail-mvt-stk-article.component";

@Component({
  selector: 'app-page-mvtstk',
  standalone: true,
  imports: [
    CommonModule,
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailMvtStkArticleComponent
  ],
  templateUrl: './page-mvtstk.component.html',
  styleUrl: './page-mvtstk.component.scss'
})
export class PageMvtstkComponent {

  // ✅ Fonction qui ouvre/ferme l'accordéon
  toggleAccordion() {
    const collapseElement = document.getElementById('collapseThree');
    if (collapseElement) {
      collapseElement.classList.toggle('show'); // ✅ Ajoute/enlève la classe "show"
    }
  }

}
