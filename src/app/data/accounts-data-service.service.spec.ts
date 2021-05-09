import { TestBed } from '@angular/core/testing';

import { AccountsDataServiceService } from './accounts-data-service.service';

describe('AccountsDataServiceService', () => {
  let service: AccountsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
