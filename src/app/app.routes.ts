import { Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import {PageMvtstkComponent} from "./pages/mvtstk/page-mvtstk/page-mvtstk.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {NouveauCltFrsComponent} from "./composants/nouveau-clt-frs/nouveau-clt-frs.component";




export const routes: Routes = [
  { path: 'login',
    component: PageLoginComponent
  },
  { path: 'inscrire',
    component: PageInscriptionComponent
  },
  { path: '',
    component: PageDashboardComponent,
    children: [{path: 'statistiques',
      component: PageStatistiquesComponent},
      {path: 'articles', component: PageArticleComponent},
      {path: 'nouvelarticle', component: NouvelArticleComponent},
      {path: 'mvtstk', component: PageMvtstkComponent},
      {path: 'clients', component: PageClientComponent},
      {path: 'nouveauclient', component: NouveauCltFrsComponent},
      {path: 'fournisseurs', component: PageFournisseurComponent},
      {path: 'nouveaufournisseur', component: NouveauCltFrsComponent}
    ] }
];
