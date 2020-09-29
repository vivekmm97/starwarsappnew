import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadDetailsComponent } from './components/load-details/load-details.component';
import { DetailListComponent } from './components/detail-list/detail-list.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { MainComponent } from './modules/shared/main/main.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoadDetailsComponent,
    DetailListComponent,
    HomeComponent,
    ViewDetailsComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplebarAngularModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
