import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
