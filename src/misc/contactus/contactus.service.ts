import { ServerResponse } from './../../app/shared/serverresponse.interface';
import { ConstantService } from './../../app/shared/constant.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Contactus } from './contactus.model';

import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  public CONTACTUS_URL = environment.WEBSERVICE_URL + '/contactus';

  constructor(private httpClient: HttpClient, private constantService: ConstantService) {}

  saveContactus(contactus: Contactus): Observable<ServerResponse> {
    const body = JSON.stringify(contactus);
    return this.httpClient.post<ServerResponse>(this.CONTACTUS_URL, body, { headers: this.constantService.addHttptHeader() });
  }
}
