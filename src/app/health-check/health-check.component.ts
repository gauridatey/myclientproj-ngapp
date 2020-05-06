import { Component, OnInit } from '@angular/core';
import { HealthCheckService } from './health-check.service';
import { NGXLogger } from 'ngx-logger';
import { ToastMessageService } from '../shared/message/toast-message.service';
import { AlertMessageService } from '../shared/message/alert-message.service';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {
  result: string;
  todayDate: Date = new Date();

  constructor(
    private healthCheckService: HealthCheckService,
    private toastMessageService: ToastMessageService,
    private alertMessageService: AlertMessageService,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.getServerHealthCheck();
  }

  getServerHealthCheck() {
    this.healthCheckService.getServerHealthCheck().subscribe(
      (response: any) => {
        this.logger.debug('Response received from server [' + response.message + ']');
        this.result = response.message;
        this.toastMessageService.success(this.result);
        this.alertMessageService.success(this.result);
      },
      () => {}
    );
  }
}
