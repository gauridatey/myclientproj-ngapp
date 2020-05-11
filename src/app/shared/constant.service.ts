import { Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF, DOCUMENT } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  constructor(@Inject(APP_BASE_HREF) public baseHref: string, @Inject(DOCUMENT) private document: Document) {}

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

  // validation pattern
  public SECRETKEY_PATTERN = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\\s]).{8,16}$';

  public EMAIL_PATTERN =
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  public ALPHA_NOSPACE_PATTERN = '^[A-Za-z]{0,}$';
  public ALPHA_WITHSPACE_PATTERN = '^[A-Za-z]{1,}[A-Za-z\\s]{0,}$';

  public NUMERIC_PATTERN = '^[0-9]{0,}$';

  public ALPHANUMERIC_NOSPACE_FIRSTALPHA_PATTERN = '^[A-Za-z]{1,}[A-Za-z0-9]{0,}$';
  public ALPHANUMERIC_WITHSPACE_FIRSTALPHA_PATTERN = '^[A-Za-z]{1,}[A-Za-z0-9\\s]{0,}$';
  public ALPHANUMERIC_WITHSPACE_SPECIALCHARS_FIRSTALPHA_PATTERN = '^[A-Za-z]{1,}[A-Za-z0-9\\s\\.!@#$%&*]{0,}$';

  // end of validation patterns

  // start of validation messages
  public MESSAGE_REQUIRED = 'is required';
  public MESSAGE_SECRETKEY_PATTERN = 'should contain at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character.';

  public MESSAGE_EMAIL_PATTERN = 'should contain proper email format.';

  public MESSAGE_ALPHA_NOSPACE_PATTERN = 'should contain only alphabets.';
  public MESSAGE_ALPHA_WITHSPACE_PATTERN_WITHSPACE = 'should contain only alphabets and space.';

  public MESSAGE_NUMERIC_PATTERN = 'should contain only numbers';

  public MESSAGE_ALPHANUMERIC_NOSPACE_FIRSTALPHA_PATTERN = 'should contain alphanumeric with first letter from alphabet';
  public MESSAGE_ALPHANUMERIC_WITHSPACE_FIRSTALPHA_PATTERN = 'should contain alphanumeric and space with first letter from alphabet';
  public MESSAGE_ALPHANUMERIC_WITHSPACE_SPECIALCHARS_FIRSTALPHA_PATTERN =
    "should contain alphanumeric, space and some special characters('.', '!', '@', '#', '$', '%', '&', '*') with first letter from alphabet";
  // end of validation messsages

  // html form related
  public TEXTAREA_ROWS_SMALL = 5;
  public TEXTAREA_COLUMNS_SMALL = 10;

  public TEXTAREA_ROWS_MEDIUM = 10;
  public TEXTAREA_COLUMNS_MEDIUM = 15;

  public TEXTAREA_ROWS_LARGE = 20;
  public TEXTAREA_COLUMNS_LARGE = 20;

  public TEXTAREA_MAXLENGTH_XSMALL = 200;
  public TEXTAREA_MAXLENGTH_SMALL = 500;
  public TEXTAREA_MAXLENGTH_MEDIUM = 1000;
  public TEXTAREA_MAXLENGTH_LARGE = 2000;
  public TEXTAREA_MAXLENGTH_XLARGE = 5000;

  public INPUTTEXT_MAXLENGTH_XSMALL = 20;
  public INPUTTEXT_MAXLENGTH_SMALL = 50;
  public INPUTTEXT_MAXLENGTH_MEDIUM = 200;
  public INPUTTEXT_MAXLENGTH_LARGE = 300;
  public INPUTTEXT_MAXLENGTH_XLARGE = 500;
  // end of html form related

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
  redirectToExternalUrl(url: string): void {
    this.document.location.href = url;
  }
}
