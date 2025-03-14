import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-profil',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})
export class PageProfilComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }
  ngOnInit() {
  }

  modifierMotDePasse() {
    this.router.navigate(['changermotdepasse'])
  }
}
