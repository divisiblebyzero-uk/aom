import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountQuickViewComponent } from './account-quick-view.component';

describe('AccountQuickViewComponent', () => {
  let component: AccountQuickViewComponent;
  let fixture: ComponentFixture<AccountQuickViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountQuickViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
