import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { ConstantService } from '../constant.service';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  constructor(private messageService: MessageService, private constantService: ConstantService) {}

  success(message: string, keepAfterNavigationChange = false) {
    this.messageService.generateMessage(
      message,
      this.constantService.MESSAGE_DISPLAY_TYPE_TOAST,
      this.constantService.MESSAGE_TYPE_SUCESS,
      keepAfterNavigationChange
    );
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.messageService.generateMessage(
      message,
      this.constantService.MESSAGE_DISPLAY_TYPE_TOAST,
      this.constantService.MESSAGE_TYPE_ERROR,
      keepAfterNavigationChange
    );
  }

  info(message: string, keepAfterNavigationChange = false) {
    this.messageService.generateMessage(
      message,
      this.constantService.MESSAGE_DISPLAY_TYPE_TOAST,
      this.constantService.MESSAGE_TYPE_INFO,
      keepAfterNavigationChange
    );
  }
}
