import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  imports: [
    SharedModule,
    TeachersRoutingModule
  ],
  declarations: [ManageComponent]
})
export class TeachersModule { }
