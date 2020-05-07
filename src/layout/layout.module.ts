import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
@NgModule({
  declarations: [BodyComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule, FormsModule],
  exports: [BodyComponent, FooterComponent]
})
export class LayoutModule {}
