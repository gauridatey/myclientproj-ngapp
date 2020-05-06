import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExceptionComponent } from './exception/exception.component';
import { EXCEPTION_ROUTES } from './exception/exception.routes';

const routes: Routes = [
  {
    path: 'exception',
    component: ExceptionComponent,
    children: EXCEPTION_ROUTES
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
