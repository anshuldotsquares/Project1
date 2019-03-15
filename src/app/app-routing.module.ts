import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeersListComponent } from './beers-list/beers-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CTAGridComponent } from './ctagrid/ctagrid.component';

const routes: Routes = [
  {
    path: 'accordion',
    component: AccordionComponent
  },{
    path: 'carousel',
    component: CarouselComponent
  },{
    path: 'CTAgrid',
    component: CTAGridComponent
  },
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
{
  path:'**',component :PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
