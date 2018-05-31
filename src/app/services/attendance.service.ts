import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpParams } from '@angular/common/http';

import { StudentWithAttendances } from '../models/student-with-attendances';
import { Attendance } from '../models/attendance';
import { AppInfo } from './app-info.service';

import { USERS_ATTENDANCES_MOCK } from '../mocks/students-attendances-mock';
import { DatePipe } from '@angular/common';
import {StudentWithSchoolDays} from "../models/student-with-school-days";
import {STUDENT_SCHOOL_DAYS_MOCK} from "../mocks/student-school-days-mock";

@Injectable()
export class AttendanceService {
  private datePipe = new DatePipe('en-US');
  readonly statusNames = [
    '出席', '遅刻', '欠席', '就活', '病欠', '公欠'
  ];

  readonly statusShortNames = this.statusNames.map(name => name[0]);

  constructor(
    private appInfo: AppInfo,
    private httpClient: HttpClient) {
  }

  getStudents(date = new Date()): Observable<StudentWithAttendances[]> {
    let url = this.appInfo.apiUrl + '/students/attendances';
    let strDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    let params = new HttpParams().set('date', strDate);
    return this.httpClient.get<any>(url, {params})
      .map((res) => res.students as StudentWithAttendances[]);
    // return Observable.of(USERS_ATTENDANCES_MOCK).map(res => res.students).delay(1000);
  }
  getMySchoolDays(): Observable<StudentWithSchoolDays> {
    return Observable.of(STUDENT_SCHOOL_DAYS_MOCK).delay(1000);
  }

  getMyAttendanceRate(): Observable<Numver>{
    return Observable.of.(0.555).delay(1000);
  }


  updateAttendance(id: number, status: number): Observable<Attendance> {
    let url = this.appInfo.apiUrl + `/attendances/${id}`;
    return this.httpClient.patch<any>(url, {status})
      .map(res => res.attendance);
    // const RESPONSE_MOCK = {id, status};
    // return Observable.of(RESPONSE_MOCK).delay(1000);
  }
}
