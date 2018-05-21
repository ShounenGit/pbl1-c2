import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { StudentWithAttendances } from '../models/student-with-attendances';
import { Attendance } from '../models/attendance';

import { USERS_ATTENDANCES_MOCK } from '../mocks/students-attendances-mock';

@Injectable()
export class AttendanceService {
  readonly statusNames = [
    '出席', '遅刻', '欠席', '就活', '病欠', '公欠'
  ];

  readonly statusShortNames = this.statusNames.map(name => name[0]);

  constructor() {
  }

  getStudents(date = new Date()): Observable<StudentWithAttendances[]> {
    // TODO: implements API call to /students/attendances
    return Observable.of(USERS_ATTENDANCES_MOCK).map(res => res.students).delay(1000);
  }


  updateAttendance(id: number, status: number): Observable<Attendance> {
    // TODO: implements API call to /attendances/:id (PATCH)
    const RESPONSE_MOCK = {id, status};
    return Observable.of(RESPONSE_MOCK).delay(1000);
  }
}
