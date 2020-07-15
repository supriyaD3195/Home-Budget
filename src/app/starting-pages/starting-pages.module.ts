import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartingPagesPageRoutingModule } from './starting-pages-routing.module';

import { StartingPagesPage } from './starting-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartingPagesPageRoutingModule
  ],
  declarations: [StartingPagesPage]
})
export class StartingPagesPageModule {}
