import { Component, Input, OnInit } from '@angular/core';
import { AccountsDataServiceService } from 'src/app/data/accounts-data-service.service';
import { Transaction } from 'src/app/entities';

@Component({
  selector: 'app-transaction-quick-view',
  templateUrl: './transaction-quick-view.component.html',
  styleUrls: ['./transaction-quick-view.component.scss']
})
export class TransactionQuickViewComponent implements OnInit {

  @Input() transactionId: string;
  t: Transaction;
  debitAccountName: string;
  creditAccountName: string;

  constructor(private data: AccountsDataServiceService) { }

  public ngOnInit() {
    this.t = this.data.getTransaction(this.transactionId);
    this.debitAccountName = this.data.getAccount(this.t.debitAccountId).name;
    this.creditAccountName = this.data.getAccount(this.t.creditAccountId).name;
  }

}
