import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import {STUDENT_SCHOOL_DAYS_MOCK} from '../../mocks/student-school-days-mock';


@Component({
  selector: 'app-attendance-rate-confirmation',
  templateUrl: './attendance-rate-confirmation.component.html',
  styleUrls: ['./attendance-rate-confirmation.component.scss']
})
export class AttendanceRateConfirmationComponent implements OnInit {
  student = STUDENT_SCHOOL_DAYS_MOCK;
  statusid: number;
  AttendanceRate  = 85.4;
  selectDate = this.getDateStr(new Date());
  getDateStr(dt: Date): string {
    let str = dt.getFullYear().toString();
    str = str + '-' + this.zeroPadding((dt.getMonth() + 1), 2);
    str = str + '-' + this.zeroPadding(dt.getDate(), 2);
    return str;
  }
  zeroPadding(n: number, d: number) {
    return (Array(d).join('0') + n).slice(-d);
  }
  constructor(private attendanceService: AttendanceService) {
  }

  ngOnInit() {
  }

  attendanceresult(status: number) {
    return this.attendanceService.statusShortNames[status];
  }

  getstatuscolor(status: number) {
    return [
      'table-light',
      'table-warning',
      'table-danger',
      'table-success',
      'table-secondary',
      'table-info',
    ][status];
  }
}



