import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CTAGridComponent } from './ctagrid/ctagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    PageNotFoundComponent,
    SidebarComponent,
    NavbarComponent,
    AccordionComponent,
    CarouselComponent,
    CTAGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
