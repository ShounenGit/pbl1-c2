import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { StudentWithAttendances } from '../../models/student-with-attendances';
import { Attendance } from '../../models/attendance';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  private date = new Date();
  periodCount = 0;
  students: StudentWithAttendances[] = [];
  isUpdating = false;
  isLoading = false;

  constructor(private attendanceService: AttendanceService) {
  }

  get statusNames() {
    return this.attendanceService.statusShortNames;
  }

  ngOnInit() {
    this.loadStudents(this.date);
  }

  setDate(nextValue: string) {
    this.date = new Date(nextValue);
    this.loadStudents(this.date);
  }

  loadStudents(date: Date) {
    this.isLoading = true;
    this.attendanceService
      .getStudents(date)
      .subscribe(students => {
        this.students = students;
        this.periodCount = students[0].attendances.length;
        this.isLoading = false;
      });
  }

  truncNumber(studentNumber: string) {
    return studentNumber.slice(-2);
  }

  statusStyle(status: number) {
    return [
      {'bg-light': true},
      {'bg-warning': true},
      {'bg-danger': true, 'text-white': true},
      {'bg-success': true, 'text-white': true},
      {'bg-secondary': true, 'text-white': true},
      {'bg-info': true, 'text-white': true},
    ][status];
  }

  updateAttendance(attendance: Attendance, nextState: number) {
    this.isUpdating = true;
    this.attendanceService
      .updateAttendance(attendance.id, nextState)
      .subscribe(updated => {
        attendance.status = updated.status;
        this.isUpdating = false;
      });
  }
}
