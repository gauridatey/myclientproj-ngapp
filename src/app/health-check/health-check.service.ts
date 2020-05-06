import { ConstantService } from './../shared/constant.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {
  constructor(private httpClient: HttpClient, private constantService: ConstantService) {}

  getServerHealthCheck(): Observable<any> {
    return this.httpClient.get<any>(environment.WEBSERVICE_URL + '/healthcheck', { headers: this.constantService.addHttptHeader() });
  }
}
