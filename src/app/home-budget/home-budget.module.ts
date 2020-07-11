import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBudgetPageRoutingModule } from './home-budget-routing.module';

import { HomeBudgetPage } from './home-budget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBudgetPageRoutingModule
  ],
  declarations: [HomeBudgetPage]
})
export class HomeBudgetPageModule {}
