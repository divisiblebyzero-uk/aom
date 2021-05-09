import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetupDataComponent } from './admin/setup-data/setup-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountQuickViewComponent } from './views/account-quick-view/account-quick-view.component';
import { TransactionQuickViewComponent } from './views/transaction-quick-view/transaction-quick-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupDataComponent,
    WelcomeComponent,
    AccountQuickViewComponent,
    TransactionQuickViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
