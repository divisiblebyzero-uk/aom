import { Component, Input, OnInit } from '@angular/core';
import { AccountsDataServiceService } from 'src/app/data/accounts-data-service.service';
import { Account } from '../../entities';

@Component({
  selector: 'app-account-quick-view',
  templateUrl: './account-quick-view.component.html',
  styleUrls: ['./account-quick-view.component.scss']
})
export class AccountQuickViewComponent implements OnInit {

  @Input() accountId: string;
  a: Account;

  constructor(private data: AccountsDataServiceService) { }

  public ngOnInit() {
    this.a = this.data.getAccount(this.accountId);
  }

}
