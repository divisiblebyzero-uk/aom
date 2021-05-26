import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupDataComponent } from './admin/setup-data/setup-data.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'upload-data', component: UploadDataComponent},
  {path: 'admin/setup-data', component: SetupDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
