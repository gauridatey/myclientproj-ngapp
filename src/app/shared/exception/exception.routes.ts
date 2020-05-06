import { ExceptionApiserverdownComponent } from './exception-apiserverdown/exception-apiserverdown.component';
import { ExceptionGeneralComponent } from './exception-general/exception-general.component';
import { ExceptionUnauthorizedComponent } from './exception-unauthorized/exception-unauthorized.component';
import { ExceptionNotfoundComponent } from './exception-notfound/exception-notfound.component';
import { Routes } from '@angular/router';
import { ExceptionForbiddenComponent } from './exception-forbidden/exception-forbidden.component';

/**
 * Created by manisha on 04/16/17.
 */

export const EXCEPTION_ROUTES: Routes = [
  { path: '', redirectTo: 'general', pathMatch: 'full' },
  {
    path: 'general',
    component: ExceptionGeneralComponent
  },
  {
    path: 'notfound',
    component: ExceptionNotfoundComponent
  },
  {
    path: 'unauthorized',
    component: ExceptionUnauthorizedComponent
  },
  {
    path: 'forbidden',
    component: ExceptionForbiddenComponent
  },
  {
    path: 'apiserverdown',
    component: ExceptionApiserverdownComponent
  }
];
