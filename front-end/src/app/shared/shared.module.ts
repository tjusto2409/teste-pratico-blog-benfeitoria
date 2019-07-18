import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Servicos
import { HelperService } from '../core/helper/helper.service';
import { ConfigService } from '../core/config/config.service';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    HelperService,
    ConfigService
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
