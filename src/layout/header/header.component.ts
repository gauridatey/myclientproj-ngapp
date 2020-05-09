import { environment } from './../../environments/environment';
import { ConstantService } from './../../app/shared/constant.service';
import { Component, OnInit, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

interface Language {
  language: string;
  baseHref: string;
  label: string;
  url: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  languageList: Language[] = [];
  selectedLang: Language;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string, private constantService: ConstantService) {
    this.languageList = [
      { language: 'en', baseHref: '/', label: 'English', url: environment.LANG_EN_URL },
      { language: 'fr', baseHref: '/fr', label: 'French', url: environment.LANG_FR_URL },
      { language: 'mr', baseHref: '/mr', label: 'Marathi', url: environment.LANG_MR_URL }
    ];
    // get default selectedLang depending on baseHref
    if (!this.languageList.some(item => item.baseHref === this.baseHref)) {
      this.selectedLang = this.languageList[0];
    } else {
      this.selectedLang = this.languageList.filter(item => item.baseHref === this.baseHref)[0];
    }
  }

  onChangeLang(language: Language) {
    this.constantService.redirectToExternalUrl(language.url);
  }

  ngOnInit() {}
}
