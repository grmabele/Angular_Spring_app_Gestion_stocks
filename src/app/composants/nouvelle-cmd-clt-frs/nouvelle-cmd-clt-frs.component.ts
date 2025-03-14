import { Component } from '@angular/core';
import {DetailArticleComponent} from "../detail-article/detail-article.component";
import {DetailCmdComponent} from "../detail-cmd/detail-cmd.component";

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  standalone: true,
  imports: [
    DetailArticleComponent,
    DetailCmdComponent
  ],
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.scss'
})
export class NouvelleCmdCltFrsComponent {

}
