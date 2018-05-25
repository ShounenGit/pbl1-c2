import { Component, OnInit } from '@angular/core';
import { STUDENT_SCHOOL_DAYS_MOCK } from '../mocks/student-school-days-mock';
import {StudentWithSchoolDays} from '../models/student-with-school-days';

@Component({
  selector: 'app-attendance-rate-confirmation',
  templateUrl: './attendance-rate-confirmation.component.html',
  styleUrls: ['./attendance-rate-confirmation.component.scss']
})
export class AttendanceRateConfirmationComponent implements OnInit {
  student = STUDENT_SCHOOL_DAYS_MOCK;
  constructor() { }

  ngOnInit() {
  }

}
