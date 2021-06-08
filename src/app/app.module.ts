import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayComponent } from './pages/overlay/overlay.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { HeaderComponent } from './components/header/header.component';
import { SbToolTipComponent } from './directives/sbtooltip/sb-tool-tip.component';
import { SBToolTipDirective } from './directives/sbtooltip/sb-tool-tip.directive';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    HeaderComponent,
    SBToolTipDirective,
    SbToolTipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
