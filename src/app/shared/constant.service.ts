import { Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  constructor(@Inject(APP_BASE_HREF) public baseHref: string) {}

  // alert and toast messages
  public MESSAGE_DISPLAY_TYPE_ALERT = 'alert';
  public MESSAGE_DISPLAY_TYPE_TOAST = 'toast';

  public MESSAGE_TYPE_SUCESS = 'success';
  public MESSAGE_TYPE_INFO = 'info';
  public MESSAGE_TYPE_ERROR = 'error';

  public MESSAGE_TOAST_TIMEOUT = 2500;

  public BACKEND_NOT_FOUND = '404 status has been returned';
  public UNAUTHORIZED_ACCESS = '401 status has been returned';
  public FORBIDDEN_ACCESS = '403 status has been returned';
  public BACKEND_SERVER_DOWN = 'Backend server seems to be down, please try again later';
  public GENERIC_ERROR_MESSAGE = 'Http Error Occurred';

  public capitalizeFirstLetter(inputText: string) {
    if (inputText && inputText.length > 0) {
      return inputText.charAt(0).toUpperCase() + inputText.slice(1);
    }
    return inputText;
  }

  addHttptHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    let selectedLang = this.removeFirstAndLastSlash(this.baseHref).trim();
    if (!this.removeFirstAndLastSlash(this.baseHref)) {
      selectedLang = 'en';
    }
    headers = headers.append('Accept-Language', selectedLang);
    return headers;
  }

  removeFirstAndLastSlash(tobeConvertedString: string): string {
    return tobeConvertedString.replace(/^\/|\/$/g, '');
  }
}
