import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TeachersRoutingModule
  ],
  declarations: []
})
export class TeachersModule { }
