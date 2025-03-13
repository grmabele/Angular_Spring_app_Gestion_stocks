import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fa-solid fa-chart-line',
      url: '',
      sousMenu: [
        { id: '11', titre: 'Vue d\'ensemble', icon: 'fa-solid fa-chart-pie', url: '' },
        { id: '12', titre: 'Statistiques', icon: 'fa-solid fa-chart-bar', url: 'statistiques' }
      ] as Menu[]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-box',
      sousMenu: [
        { id: '21', titre: 'Articles', icon: 'fa-solid fa-box-open', url: 'articles' },
        { id: '22', titre: 'Mouvements du stock', icon: 'fa-solid fa-truck', url: 'mvtstk' }
      ] as Menu[]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-users',
      sousMenu: [
        { id: '31', titre: 'Clients', icon: 'fa-solid fa-user', url: 'clients' },
        { id: '32', titre: 'Commandes clients', icon: 'fa-solid fa-cart-arrow-down', url: '' }
      ] as Menu[]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-handshake',
      sousMenu: [
        { id: '41', titre: 'Fournisseurs', icon: 'fa-solid fa-truck-loading', url: 'fournisseurs' },
        { id: '42', titre: 'Commandes fournisseurs', icon: 'fa-solid fa-truck-moving', url: '' }
      ] as Menu[]
    },
    {
      id: '5',
      titre: 'Paramétrages',
      icon: 'fa-solid fa-cogs',
      sousMenu: [
        { id: '51', titre: 'Catégories', icon: 'fa-solid fa-tags', url: '' },
        { id: '52', titre: 'Utilisateurs', icon: 'fa-solid fa-users-cog', url: '' }
      ] as Menu[]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(url?: string): void {
    if (url) {
      this.router.navigate([url]).then((result) => {
        console.log('Navigation réussie :', result);
      }).catch((error) => {
        console.error('Erreur de navigation :', error);
      });
    }
  }
}
