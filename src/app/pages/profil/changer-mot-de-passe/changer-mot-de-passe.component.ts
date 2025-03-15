import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  cancelClick() {
    this.router.navigate(['profil'])
  }

  saveClick() {

  }
}
