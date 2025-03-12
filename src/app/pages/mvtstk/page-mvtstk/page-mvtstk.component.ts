import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BouttonActionComponent} from "../../../composants/boutton-action/boutton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {
  DetailMvtStkArticleComponent
} from "../../../composants/detail-mvt-stk-article/detail-mvt-stk-article.component";
import {DetailMvtStkComponent} from "../../../composants/detail-mvt-stk/detail-mvt-stk.component";

@Component({
  selector: 'app-page-mvtstk',
  standalone: true,
  imports: [
    CommonModule,
    BouttonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent
  ],
  templateUrl: './page-mvtstk.component.html',
  styleUrl: './page-mvtstk.component.scss'
})
export class PageMvtstkComponent {

  openedAccordion: number | null = null; // Stocke l'accordéon ouvert

  toggleAccordion(index: number) {
    this.openedAccordion = this.openedAccordion === index ? null : index;
  }

}
