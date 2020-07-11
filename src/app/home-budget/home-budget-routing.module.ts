import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBudgetPage } from './home-budget.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBudgetPageRoutingModule {}
