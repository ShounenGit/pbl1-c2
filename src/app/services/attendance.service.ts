import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { StudentWithAttendances } from '../models/student-with-attendances';
import { USERS_ATTENDANCES_MOCK } from '../mocks/students-attendances-mock';

@Injectable()
export class AttendanceService {

  constructor() {
  }

  getStudents(until = new Date(), limit = 5): Observable<StudentWithAttendances[]> {
    // TODO: implements API call to /students/attendances
    return Observable.of(USERS_ATTENDANCES_MOCK).map(res => res.students);
  }

}
