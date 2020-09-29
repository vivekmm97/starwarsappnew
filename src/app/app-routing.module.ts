import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { MainComponent } from './modules/shared/main/main.component';
import { DetailListComponent } from './components/detail-list/detail-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoadDetailsComponent } from './components/load-details/load-details.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

// import { from } from 'rxjs';
// import { pathToFileURL } from 'url';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'list',
    component: DetailListComponent,
    children: [
      // films
      {
        path: 'film',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ViewDetailsComponent
          },
          {
            path: 'page',
            component: ViewDetailsComponent
          },
          {
            path: 'page/1',
            component: ViewDetailsComponent
          },
          {
            path: 'page/:page:term',
            component: ViewDetailsComponent
          },
          {
            path: 'view',
            component: LoadDetailsComponent
          }
        ],
      },
      // species
      {
        path: 'species',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ViewDetailsComponent
          },
          {
            path: 'page',
            component: ViewDetailsComponent
          },
          {
            path: 'page/1',
            component: ViewDetailsComponent
          },
          {
            path: 'page/:page:term',
            component: ViewDetailsComponent
          },
          {
            path: 'view',
            component: LoadDetailsComponent
          }
        ],
      },
      // people
      {
        path: 'people',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ViewDetailsComponent
          },
          {
            path: 'page',
            component: ViewDetailsComponent
          },
          {
            path: 'page/1',
            component: ViewDetailsComponent
          },
          {
            path: 'page/:page:term',
            component: ViewDetailsComponent
          },
          {
            path: 'view',
            component: LoadDetailsComponent
          }
        ],
      },
      // planets
      {
        path: 'planets',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ViewDetailsComponent
          },
          {
            path: 'page',
            component: ViewDetailsComponent
          },
          {
            path: 'page/1',
            component: ViewDetailsComponent
          },
          {
            path: 'page/:page:term',
            component: ViewDetailsComponent
          },
          {
            path: 'view',
            component: LoadDetailsComponent
          }
        ],
      },
      // starships
      {
        path: 'starships',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ViewDetailsComponent
          },
          {
            path: 'page',
            component: ViewDetailsComponent
          },
          {
            path: 'page/1',
            component: ViewDetailsComponent
          },
          {
            path: 'page/:page:term',
            component: ViewDetailsComponent
          },
          {
            path: 'view',
            component: LoadDetailsComponent
          }
        ],
      },
      // vehicles
      {
        path: 'vehicles',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ViewDetailsComponent
          },
          {
            path: 'page',
            component: ViewDetailsComponent
          },
          {
            path: 'page/1',
            component: ViewDetailsComponent
          },
          {
            path: 'page/:page:term',
            component: ViewDetailsComponent
          },
          {
            path: 'view',
            component: LoadDetailsComponent
          }
        ],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
