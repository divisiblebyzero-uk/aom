import { Injectable } from '@angular/core';
import { Account, Transaction } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class AccountsDataServiceService {

  constructor() {
    this.accounts = [];
    this.transactions = [];
   }

  accounts: Account[];
  transactions: Transaction[];

  public addAccount(a: Account): void {
    a.id = this.getNewId();
    this.accounts.push(a);
  }

  public addTransaction(t: Transaction): void {
    t.id = this.getNewId();
    this.transactions.push(t);
  }

  public getAccounts(): Account[] {
    return this.accounts;
  }

  public getTransactions(): Transaction[] {
    return this.transactions;
  }

  getNewId(): string {
    const stringArr = [];
    for(let i = 0; i<4; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

}
