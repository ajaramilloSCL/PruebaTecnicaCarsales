import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodiosComponent,
    VistaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
