import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConstantService } from '../constant.service';
import { AlertMessageService } from '../message/alert-message.service';
import { ToastMessageService } from '../message/toast-message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    public router: Router,
    private logger: NGXLogger,
    private alertMessageService: AlertMessageService,
    private toastMessageService: ToastMessageService,
    private constantService: ConstantService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          // A client-side or network error occurred.
          this.logger.error('Client side error: [' + error.error.message + ']');
        } else {
          switch (error.status) {
            case 0:
              // status returned will be 0 if backend server is not running
              this.logger.error(this.constantService.BACKEND_SERVER_DOWN);
              this.router.navigate(['/exception/apiserverdown']);
              break;
            case 404:
              this.logger.error(this.constantService.BACKEND_SERVER_DOWN);
              this.router.navigate(['/exception/notfound']);
              break;
            case 401:
              this.logger.error(this.constantService.UNAUTHORIZED_ACCESS);
              this.router.navigate(['/exception/unauthorized']);
              break;
            case 403:
              this.logger.error(this.constantService.FORBIDDEN_ACCESS);
              this.router.navigate(['/exception/forbidden']);
              break;
            case 500:
              if (error.error === undefined || error.error === null) {
                this.logger.error('Error Status: [' + error.status + '], Message: [' + error.message + ']');
                this.alertMessageService.error(error.message);
              } else {
                this.logger.error('Error Status: [' + error.status + '], Message: [' + error.error.message + ']');
                this.alertMessageService.error(error.error.message);
              }
              break;
            default:
              this.logger.error('Default - Error Status: [' + error.status + ']');
              this.toastMessageService.error(this.constantService.GENERIC_ERROR_MESSAGE);
          }
        }
        // return the error on the upper level:
        return throwError(error);
      })
    );
  }
}
