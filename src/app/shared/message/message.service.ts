import { ConstantService } from '../constant.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private alertSubject = new Subject<Message>();
  private toastSubject = new Subject<Message>();

  public keepAfterNavigationChange = false;

  constructor(private router: Router, private constantService: ConstantService) {
    // clear messages on route change depending on keepAfterNavigationChange value
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear messages
          this.clearAllMessages();
        }
      }
    });
  }

  getAlertMessage(): Observable<Message> {
    return this.alertSubject.asObservable();
  }

  getToastMessage(): Observable<Message> {
    return this.toastSubject.asObservable();
  }

  generateMessage(message: string, displayType: string, messageType: string, keepAfterNavigationChange: boolean) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    if (displayType === this.constantService.MESSAGE_DISPLAY_TYPE_ALERT) {
      this.alertSubject.next(new Message(message, displayType, messageType));
    } else if (displayType === this.constantService.MESSAGE_DISPLAY_TYPE_TOAST) {
      this.toastSubject.next(new Message(message, displayType, messageType));
    }
  }

  clearAlertMessages() {
    this.alertSubject.next();
  }

  clearToastMessages() {
    this.toastSubject.next();
  }

  clearAllMessages() {
    this.clearAlertMessages();
    this.clearToastMessages();
  }
}
