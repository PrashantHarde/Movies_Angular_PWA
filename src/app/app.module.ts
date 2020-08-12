import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { HeaderComponent } from './header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js',
      {
        enabled: environment.production
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
