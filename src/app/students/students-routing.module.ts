import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AttendanceRateConfirmationComponent} from './attendance-rate-confirmation/attendance-rate-confirmation.component';

const routes: Routes = [
  { path: 'attendance-rate-confirmation', component: AttendanceRateConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
