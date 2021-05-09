import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionQuickViewComponent } from './transaction-quick-view.component';

describe('TransactionQuickViewComponent', () => {
  let component: TransactionQuickViewComponent;
  let fixture: ComponentFixture<TransactionQuickViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionQuickViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
