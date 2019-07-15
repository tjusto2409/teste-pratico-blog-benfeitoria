// Modulo Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulo da aplicação
import { routing } from './core/routes/app.routing';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/module-home/home.module';

// Component Bootstrap (Inicializa a aplicação)
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
