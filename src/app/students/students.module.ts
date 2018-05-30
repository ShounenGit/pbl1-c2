import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { AttendanceRateConfirmationComponent } from './attendance-rate-confirmation/attendance-rate-confirmation.component';

@NgModule({
  imports: [
    StudentsRoutingModule,
    SharedModule
  ],
  declarations: [AttendanceRateConfirmationComponent]
})
export class StudentsModule { }
