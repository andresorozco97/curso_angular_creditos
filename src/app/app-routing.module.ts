import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './components/credit/credit.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  { path: '', component: CreditComponent },
  { path: 'modal', component: ModalComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
