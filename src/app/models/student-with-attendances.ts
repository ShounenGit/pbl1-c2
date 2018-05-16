import { Attendance } from './attendance';
import { Student } from './student';

export interface StudentWithAttendances extends Student {
  attendances: Attendance[];
}

// APIのレスポンス - /users/attendances
export interface StudentsAttendancesResponse {
  students: StudentWithAttendances[];
}
