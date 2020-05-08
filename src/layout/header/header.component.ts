import { environment } from './../../environments/environment';
import { PlatformLocation } from '@angular/common';
import { ConstantService } from './../../app/shared/constant.service';
import { Component, OnInit } from '@angular/core';

interface Language {
  code: string;
  label: string;
  url: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  selectedLangUrl: string;
  selectedLang: string; // coming from basehref
  languageList: Language[] = [];

  constructor(private constantService: ConstantService, private platformLocation: PlatformLocation) {
    this.selectedLang = (this.platformLocation as any).location.pathname.substring(1, 3);
    this.languageList = [
      { code: 'en', label: 'English', url: environment.LANG_EN_URL },
      { code: 'fr', label: 'French', url: environment.LANG_FR_URL },
      { code: 'mr', label: 'Marathi', url: environment.LANG_MR_URL }
    ];
    if (typeof this.selectedLang === 'undefined' || this.selectedLang === null || this.selectedLang === '') {
      this.selectedLang = this.languageList[0].code;
      this.selectedLangUrl = this.languageList[0].url;
    } else {
      this.selectedLangUrl = this.languageList.filter(item => item.code === this.selectedLang)[0].url;
    }
  }

  onChangeLang() {
    this.constantService.redirectToExternalUrl(this.selectedLangUrl);
  }
  ngOnInit() {}
}
