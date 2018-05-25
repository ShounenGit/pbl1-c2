import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TeachersModule } from './teachers/teachers.module';
import { AttendanceRateConfirmationComponent } from './attendance-rate-confirmation/attendance-rate-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceRateConfirmationComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    TeachersModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
