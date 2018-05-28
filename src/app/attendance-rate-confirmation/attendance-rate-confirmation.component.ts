import { Component, OnInit } from '@angular/core';
import { STUDENT_SCHOOL_DAYS_MOCK } from '../mocks/student-school-days-mock';
import {StudentWithSchoolDays} from '../models/student-with-school-days';
import {AttendanceService} from '../services/attendance.service';

@Component({
  selector: 'app-attendance-rate-confirmation',
  templateUrl: './attendance-rate-confirmation.component.html',
  styleUrls: ['./attendance-rate-confirmation.component.scss']
})
export class AttendanceRateConfirmationComponent implements OnInit {
  student = STUDENT_SCHOOL_DAYS_MOCK;
  AttendanceRate: number = 85.4;
  selectDate = this.getDateStr(new Date());
  getDateStr(dt: Date): string {
    var str = dt.getFullYear().toString();
    str = str + '-' + this.zeroPadding((dt.getMonth() + 1), 2);
    str = str + '-' + this.zeroPadding(dt.getDate(), 2);
    return str;
  }
  zeroPadding(n: number, d: number){
    return (Array(d).join('0') + n).slice(-d);
  }
  constructor(private attendanceService: AttendanceService) {
  }

  ngOnInit() {
  }

  attendanceresult(status: number) {
    return this.attendanceService.statusShortNames[status];
  }
}



