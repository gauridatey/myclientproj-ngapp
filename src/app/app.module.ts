import { LayoutModule } from './../layout/layout.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData, APP_BASE_HREF, PlatformLocation } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { HomeModule } from './home/home.module';
registerLocaleData(localeDe, 'de');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HealthCheckModule,
    SharedModule,
    HomeModule,
    LayoutModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
