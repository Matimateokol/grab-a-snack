import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomeRouter } from './home.router';

import { SharedDirectivesModule} from '..//directives/shared-directives.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomeRouter
  , SharedDirectivesModule
  ],
  declarations: [HomePage],
})
export class HomePageModule { }
