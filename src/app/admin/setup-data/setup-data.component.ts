import { Component, OnInit } from '@angular/core';
import { Account, Transaction } from '../../entities';
import { AccountsDataServiceService } from '../../data/accounts-data-service.service'

@Component({
  selector: 'app-setup-data',
  templateUrl: './setup-data.component.html',
  styleUrls: ['./setup-data.component.scss']
})
export class SetupDataComponent implements OnInit {

  defaultUserId = "me";

  constructor(public data: AccountsDataServiceService) { }

  accounts: Account[];
  transactions: Transaction[];

  ngOnInit(): void {
    this.setupData();
    
  }

  getData(): void {
    this.accounts = this.data.accounts;
    this.transactions = this.data.transactions;
  }

  setupData(): void {
    console.log("Creating fake data");
    this.createAccounts();
    this.createTransactions();
    this.getData();
  }

  createAccounts(): void {
    this.createAccount("Current");
    this.createAccount("Savings");
    this.createAccount("Salary");
    this.createAccount("Mortgage");
  }
  
  createAccount(accountName: string): void {

    const a: Account = {
      name: accountName, 
      createdDate: new Date(),
      createdByUserId: this.defaultUserId,
      amendedDate: new Date(),
      amendedByUserId: this.defaultUserId
    };

    this.data.addAccount(a);
    
  }

  createTransactions(): void {
    this.createTransaction("Current", "Savings", 100, "Transfer to savings account");
    this.createTransaction("Salary", "Current", 1000, "Salary from employer");
    this.createTransaction("Current", "Mortgage", 500, "Mortgage on property");
  }

  createTransaction(debitAccountId: string, creditAccountId: string, amount: number, description: string) {
    const t: Transaction = {
      debitAccountId: debitAccountId,
      creditAccountId: creditAccountId,
      amount: amount,
      description: description,
      transactionDate: new Date(),
      createdDate: new Date(),
      createdByUserId: this.defaultUserId,
      amendedDate: new Date(),
      amendedByUserId: this.defaultUserId
    }
    this.data.addTransaction(t);
  }
}
