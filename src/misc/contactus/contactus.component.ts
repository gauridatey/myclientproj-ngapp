import { MessageService } from './../../app/shared/message/message.service';
import { ServerResponse } from './../../app/shared/serverresponse.interface';
import { AlertMessageService } from '../../app/shared/message/alert-message.service';
import { ConstantService } from './../../app/shared/constant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Contactus } from './contactus.model';
import { ContactusService } from './contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html'
})
export class ContactusComponent implements OnInit {
  contactus: Contactus = new Contactus();
  isSubmitBtnClicked: boolean;
  showSuccessMsg: boolean;
  serverResponse: ServerResponse;

  constructor(
    private router: Router,
    public contactusService: ContactusService,
    public alertMessageService: AlertMessageService,
    public messageService: MessageService,
    public constantService: ConstantService
  ) {}

  ngOnInit() {
    this.messageService.clearAllMessages();
  }

  onSubmit() {
    this.isSubmitBtnClicked = true;
    this.contactusService
      .saveContactus(this.contactus)
      .pipe(
        finalize(() => {
          this.isSubmitBtnClicked = false;
        })
      )
      .subscribe(
        (response: ServerResponse) => {
          this.serverResponse = response;
          this.showSuccessMsg = true;
        },
        () => {}
      );
  }

  onContinue() {
    this.router.navigate(['/home']);
  }
}
